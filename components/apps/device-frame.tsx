import Image from "next/image";
import type { AppImage } from "@/types/app";
import { cn } from "@/lib/utils";

export type FrameKind = NonNullable<AppImage["frame"]>;

export const frameOf = (img: AppImage): FrameKind =>
  img.frame ?? (img.height > img.width ? "phone" : "browser");

/** Tela crua de celular numa moldura única. A altura manda (h-full), a largura sai da proporção. */
export function PhoneFrame({ image, sizes, className }: { image: AppImage; sizes: string; className?: string }) {
  return (
    <div className={cn("h-full shrink-0 rounded-[1.9rem] bg-[#0F0E0D] p-[5px] shadow-sm", className)}>
      <div className="relative aspect-[9/19.5] h-full overflow-hidden rounded-[1.6rem]">
        <Image src={image.src} alt={image.alt} fill sizes={sizes} className="object-cover object-top" />
      </div>
    </div>
  );
}

/** Tela web numa janela de navegador. A largura manda; a caixa de fora corta o que passar embaixo. */
export function BrowserFrame({ image, host, sizes, className }: { image: AppImage; host?: string; sizes: string; className?: string }) {
  return (
    <div
      className={cn("w-full overflow-hidden rounded-xl shadow-sm", className)}
      style={{ border: "1px solid var(--border)", backgroundColor: "var(--bg)" }}
    >
      <div className="flex items-center gap-1.5 px-3 py-2" style={{ borderBottom: "1px solid var(--border)" }} aria-hidden>
        {[0, 1, 2].map((i) => (
          <span key={i} className="h-2 w-2 rounded-full" style={{ backgroundColor: "var(--border)" }} />
        ))}
        {host && (
          <span className="ml-2 truncate text-[10px]" style={{ color: "var(--text-muted)" }}>
            {host}
          </span>
        )}
      </div>
      <div className="relative aspect-[16/10]">
        <Image src={image.src} alt={image.alt} fill sizes={sizes} className="object-cover object-top" />
      </div>
    </div>
  );
}

/** Telão de evento: moldura escura de monitor, sem barra de navegador. */
export function ScreenFrame({ image, sizes, className }: { image: AppImage; sizes: string; className?: string }) {
  return (
    <div className={cn("w-full rounded-xl bg-[#0F0E0D] p-2 shadow-sm", className)}>
      <div className="relative aspect-[16/9] overflow-hidden rounded-md">
        <Image src={image.src} alt={image.alt} fill sizes={sizes} className="object-cover object-top" />
      </div>
    </div>
  );
}

/** Uma imagem na caixa padrão 16:10, com a moldura certa para o tipo de tela. */
export function FramedShot({
  image,
  host,
  sizes,
  className,
  background = "var(--surface-elevated)",
}: {
  image: AppImage;
  host?: string;
  sizes: string;
  className?: string;
  background?: string;
}) {
  const kind = frameOf(image);
  return (
    <div
      className={cn(
        "relative flex aspect-[16/10] w-full justify-center overflow-hidden",
        kind === "phone" ? "items-stretch py-6" : "items-start px-6 pt-6",
        className,
      )}
      style={{ backgroundColor: background }}
    >
      {kind === "phone" && <PhoneFrame image={image} sizes={sizes} />}
      {kind === "browser" && <BrowserFrame image={image} host={host} sizes={sizes} />}
      {kind === "screen" && <ScreenFrame image={image} sizes={sizes} />}
    </div>
  );
}
