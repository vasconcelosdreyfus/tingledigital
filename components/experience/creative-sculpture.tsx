"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

const VERTEX = `#version 300 es
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`;

const FRAGMENT = `#version 300 es
precision highp float;
uniform vec2 uResolution;
uniform vec2 uPointer;
uniform float uTime;
uniform vec3 uShape;
out vec4 fragColor;
mat2 rot(float a) { float s=sin(a), c=cos(a); return mat2(c,-s,s,c); }
float smoothUnion(float a,float b,float k) {
  float h=clamp(0.5+0.5*(b-a)/k,0.0,1.0);
  return mix(b,a,h)-k*h*(1.0-h);
}
float torus(vec3 p, float r, float tube) { return length(vec2(length(p.xz)-r,p.y))-tube; }
float scene(vec3 p) {
  p.xz = rot(uTime*0.13 + uPointer.x*0.6) * p.xz;
  p.yz = rot(0.45 + uPointer.y*0.35) * p.yz;
  vec3 q=p;
  q.xy = rot(q.z*0.85+uTime*0.08)*q.xy;
  float angle=atan(q.z,q.x);
  float fluid=length(vec2(length(q.xz)-1.02,q.y+0.22*sin(angle*3.0+uTime*.22)))-0.29;
  vec3 n=p;
  n.xy=rot(uTime*0.1)*n.xy;
  float network=length(n)-0.52;
  for(int i=0;i<6;i++) {
    float fi=float(i);
    vec3 center=vec3(cos(fi*2.39996),sin(fi*2.39996),sin(fi*1.7))*0.9;
    network=smoothUnion(network,length(n-center)-0.43,0.43);
  }
  vec3 o=p;
  o.xy=rot(0.65)*o.xy;
  float orbit=torus(o,1.03,.125);
  orbit=smoothUnion(orbit,torus(o.yxz,1.03,.125),.07);
  orbit=smoothUnion(orbit,torus(o.xzy,1.03,.125),.07);
  orbit=min(orbit,length(o)-.34);
  return fluid*uShape.x + network*uShape.y + orbit*uShape.z;
}
vec3 normalAt(vec3 p) {
  const float e=.002;
  return normalize(vec3(scene(p+vec3(e,0,0))-scene(p-vec3(e,0,0)),scene(p+vec3(0,e,0))-scene(p-vec3(0,e,0)),scene(p+vec3(0,0,e))-scene(p-vec3(0,0,e))));
}
vec3 studio(vec3 r) {
  vec3 col=vec3(.055,.075,.11);
  float strip=pow(max(0.0,1.0-abs(r.y-.42)),24.0);
  col+=vec3(.85,.96,1.0)*strip*2.5;
  col+=vec3(1.0,.055,.24)*pow(max(dot(r,normalize(vec3(-.8,.1,.7))),0.0),5.0)*2.1;
  col+=vec3(.04,.9,.72)*pow(max(dot(r,normalize(vec3(.8,.5,.35))),0.0),6.0)*2.3;
  col+=vec3(1.0,.55,.08)*pow(max(dot(r,normalize(vec3(.25,-.8,.5))),0.0),5.0)*1.5;
  col+=vec3(.9,.93,1.0)*pow(max(dot(r,normalize(vec3(.5,.8,-.5))),0.0),16.0)*3.0;
  return col;
}
void main() {
  vec2 uv=(gl_FragCoord.xy*2.0-uResolution)/uResolution.y;
  vec3 ro=vec3(0.0,0.0,4.4);
  vec3 rd=normalize(vec3(uv,-2.65));
  float b=dot(ro,rd), c=dot(ro,ro)-2.7;
  float disc=b*b-c;
  if(disc<0.0) {fragColor=vec4(0);return;}
  float distance=max(0.0,-b-sqrt(disc));
  float farDistance=-b+sqrt(disc);
  bool hit=false;
  for(int i=0;i<72;i++) {
    float d=scene(ro+rd*distance);
    if(d<.002) {hit=true;break;}
    distance+=max(d*.8,.001);
    if(distance>farDistance)break;
  }
  if(!hit) {fragColor=vec4(0);return;}
  vec3 p=ro+rd*distance;
  vec3 n=normalAt(p);
  vec3 reflection=reflect(rd,n);
  float fresnel=pow(1.0-max(dot(n,-rd),0.0),3.0);
  float light=max(dot(n,normalize(vec3(-.4,.8,1.5))),0.0);
  float ao=clamp(scene(p+n*.2)/.2,.3,1.0);
  vec3 col=studio(reflection)*(.68+.5*fresnel);
  col+=vec3(.16,.19,.23)*light;
  col*=.55+.45*ao;
  col=col/(vec3(1)+col);
  col=pow(col,vec3(.4545));
  fragColor=vec4(col,1.0);
}`;

type Controls = { mode: number; paused: boolean; reduced: boolean };

/** A small, self-contained GPU scene; no asset downloads or 3D runtime dependency. */
export function CreativeSculpture({ mode, paused }: { mode: number; paused: boolean }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const requestFrame = useRef<(() => void) | null>(null);
  const reduce = useReducedMotion();
  const controls = useRef<Controls>({ mode, paused, reduced: true });

  useEffect(() => {
    controls.current = { mode, paused, reduced: reduce !== false };
    requestFrame.current?.();
  }, [mode, paused, reduce]);

  useEffect(() => {
    const element = canvas.current;
    if (!element) return;
    const gl = element.getContext("webgl2", {
      alpha: true,
      antialias: false,
      powerPreference: "low-power",
      premultipliedAlpha: false,
    });
    if (!gl) return;
    const shaders: WebGLShader[] = [];
    function compile(type: number, source: string) {
      const shader = gl!.createShader(type);
      if (!shader) throw new Error("Could not allocate shader");
      shaders.push(shader);
      gl!.shaderSource(shader, source);
      gl!.compileShader(shader);
      if (!gl!.getShaderParameter(shader, gl!.COMPILE_STATUS))
        throw new Error(gl!.getShaderInfoLog(shader) ?? "Shader compilation failed");
      return shader;
    }
    let program: WebGLProgram | null = null;
    try {
      program = gl.createProgram();
      if (!program) throw new Error("Could not allocate program");
      gl.attachShader(program, compile(gl.VERTEX_SHADER, VERTEX));
      gl.attachShader(program, compile(gl.FRAGMENT_SHADER, FRAGMENT));
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS))
        throw new Error(gl.getProgramInfoLog(program) ?? "Shader linking failed");
    } catch (error) {
      console.error("[Tingle sculpture]", error);
      shaders.forEach((shader) => gl.deleteShader(shader));
      if (program) gl.deleteProgram(program);
      return;
    }
    gl.useProgram(program);
    const vao = gl.createVertexArray();
    gl.bindVertexArray(vao);
    const uniforms = {
      resolution: gl.getUniformLocation(program, "uResolution"),
      pointer: gl.getUniformLocation(program, "uPointer"),
      time: gl.getUniformLocation(program, "uTime"),
      shape: gl.getUniformLocation(program, "uShape"),
    };
    let disposed = false,
      visible = true,
      frame = 0,
      previous = 0,
      time = 0,
      drawCount = 0;
    let pointerX = 0,
      pointerY = 0,
      targetX = 0,
      targetY = 0;
    const shape = [1, 0, 0];
    function draw(now: number) {
      frame = 0;
      if (disposed || !visible || document.hidden || gl!.isContextLost()) return;
      const { mode: selected, paused: stopped, reduced } = controls.current;
      const animated = !stopped && !reduced;
      const delta = Math.min((now - previous) / 1000, 0.05);
      previous = now;
      if (animated) time += delta;
      for (let i = 0; i < 3; i++)
        shape[i] = animated
          ? (shape[i] ?? 0) + ((i === selected ? 1 : 0) - (shape[i] ?? 0)) * 0.12
          : i === selected
            ? 1
            : 0;
      pointerX += ((reduced ? 0 : targetX) - pointerX) * 0.08;
      pointerY += ((reduced ? 0 : targetY) - pointerY) * 0.08;
      gl!.uniform2f(uniforms.resolution, element!.width, element!.height);
      gl!.uniform2f(uniforms.pointer, pointerX, pointerY);
      gl!.uniform1f(uniforms.time, time);
      gl!.uniform3f(uniforms.shape, shape[0] ?? 1, shape[1] ?? 0, shape[2] ?? 0);
      gl!.drawArrays(gl!.TRIANGLES, 0, 3);
      element!.parentElement?.setAttribute("data-renderer", "webgl");
      element!.dataset.frames = String(++drawCount);
      if (animated) frame = requestAnimationFrame(tick);
    }
    function tick(now: number) {
      // A decorative scene does not need to consume a 120 Hz display's full frame budget.
      if (now - previous < 1000 / 30) {
        frame = requestAnimationFrame(tick);
        return;
      }
      draw(now);
    }
    function schedule() {
      if (!frame && !disposed) frame = requestAnimationFrame(draw);
    }
    requestFrame.current = schedule;
    function resize() {
      const bounds = element!.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, bounds.width < 600 ? 1 : 1.25);
      element!.width = Math.max(1, Math.round(bounds.width * ratio));
      element!.height = Math.max(1, Math.round(bounds.height * ratio));
      gl!.viewport(0, 0, element!.width, element!.height);
      schedule();
    }
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(element);
    const intersection = new IntersectionObserver((entries) => {
      visible = entries[0]?.isIntersecting ?? false;
      if (visible) {
        previous = performance.now();
        schedule();
      } else {
        cancelAnimationFrame(frame);
        frame = 0;
      }
    });
    intersection.observe(element);
    function pointer(event: PointerEvent) {
      if (
        !visible ||
        event.pointerType !== "mouse" ||
        controls.current.reduced ||
        controls.current.paused
      )
        return;
      targetX = (event.clientX / innerWidth - 0.5) * 2;
      targetY = (0.5 - event.clientY / innerHeight) * 2;
    }
    function visibility() {
      if (document.hidden) {
        cancelAnimationFrame(frame);
        frame = 0;
      } else {
        previous = performance.now();
        schedule();
      }
    }
    function contextLost() {
      // Keep the SVG after a lost context; old GPU handles cannot be reused.
      disposed = true;
      requestFrame.current = null;
      cancelAnimationFrame(frame);
      frame = 0;
      element!.parentElement?.setAttribute("data-renderer", "fallback");
    }
    window.addEventListener("pointermove", pointer, { passive: true });
    document.addEventListener("visibilitychange", visibility);
    element.addEventListener("webglcontextlost", contextLost);
    resize();
    return () => {
      disposed = true;
      requestFrame.current = null;
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersection.disconnect();
      window.removeEventListener("pointermove", pointer);
      document.removeEventListener("visibilitychange", visibility);
      element.removeEventListener("webglcontextlost", contextLost);
      gl.deleteVertexArray(vao);
      shaders.forEach((shader) => gl.deleteShader(shader));
      gl.deleteProgram(program);
    };
  }, []);

  return (
    <div className="creative-sculpture" data-mode={mode}>
      <svg className="sculpture-fallback" viewBox="0 0 600 600" aria-hidden>
        <defs>
          <linearGradient id="sculpture-spectrum">
            <stop stopColor="#f47b9a" />
            <stop offset=".45" stopColor="#9de7d0" />
            <stop offset="1" stopColor="#edc06d" />
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#sculpture-spectrum)" strokeWidth="58">
          <ellipse cx="300" cy="300" rx="185" ry="95" transform="rotate(-40 300 300)" />
          <ellipse cx="300" cy="300" rx="185" ry="95" transform="rotate(40 300 300)" />
        </g>
      </svg>
      <canvas ref={canvas} aria-hidden />
    </div>
  );
}
