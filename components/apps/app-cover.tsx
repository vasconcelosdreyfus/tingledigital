import Image from "next/image";
import type { AppEntry, AppImage } from "@/types/app";
import { cn } from "@/lib/utils";

const isPortrait = (img: AppImage) => img.height > img.width;

function PhoneFrame({ image, className, sizes }: { image: AppImage; className?: string; sizes: string }) {
  return (
    <div className={cn("shrink-0 rounded-[1.6rem] bg-[#0F0E0D] p-[5px] shadow-sm", className)}>
      <Image
        src={image.src}
        width={image.width}
        height={image.height}
        alt={image.alt}
        sizes={sizes}
        className="block h-auto w-full rounded-[1.3rem]"
      />
    </div>
  );
}

function BrowserFrame({ image, host, sizes }: { image: AppImage; host?: string; sizes: string }) {
  return (
    <div
      className="min-w-0 flex-1 overflow-hidden rounded-xl"
      style={{ border: "1px solid var(--border)", backgroundColor: "var(--bg)" }}
    >
      <div
        className="flex items-center gap-1.5 px-3 py-2"
        style={{ borderBottom: "1px solid var(--border)" }}
        aria-hidden
      >
        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "var(--border)" }} />
        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "var(--border)" }} />
        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "var(--border)" }} />
        {host && (
          <span className="ml-2 truncate text-[10px]" style={{ color: "var(--text-muted)" }}>
            {host}
          </span>
        )}
      </div>
      <Image
        src={image.src}
        width={image.width}
        height={image.height}
        alt={image.alt}
        sizes={sizes}
        className="block h-auto w-full"
      />
    </div>
  );
}

function hostOf(app: AppEntry): string | undefined {
  const first = app.links[0];
  if (!first) return undefined;
  try {
    return new URL(first.href).hostname.replace(/^www\./, "");
  } catch {
    return undefined;
  }
}

/** Capa do card: telas reais na proporção original (celular em moldura arredondada, web em janela de navegador). */
export function AppCover({ app, wide = false }: { app: AppEntry; wide?: boolean }) {
  const [cover] = app.images;

  if (!cover) {
    return (
      <div
        className="flex h-full min-h-[240px] items-center justify-center p-10"
        style={{ backgroundColor: "var(--surface-elevated)" }}
      >
        {app.logo && (
          <Image
            src={app.logo.src}
            width={app.logo.width}
            height={app.logo.height}
            alt={app.logo.alt}
            sizes="160px"
            className="h-auto w-32 rounded-[1.75rem] sm:w-40"
          />
        )}
      </div>
    );
  }

  const frameBase = "flex h-full items-center justify-center gap-3 p-6 sm:gap-4 sm:p-8";
  const background = { backgroundColor: "var(--surface-elevated)" };

  if (isPortrait(cover)) {
    const phones = app.images.filter(isPortrait).slice(0, wide ? 3 : 2);
    return (
      <div className={frameBase} style={background}>
        {phones.map((img, i) => (
          <PhoneFrame
            key={img.src}
            image={img}
            sizes="(min-width: 640px) 200px, 45vw"
            className={cn("w-[44%] max-w-[200px] sm:w-[30%]", i === 2 && "hidden sm:block", !wide && "sm:w-[44%]")}
          />
        ))}
      </div>
    );
  }

  const companion = app.images.slice(1).find(isPortrait);
  return (
    <div className={frameBase} style={background}>
      <BrowserFrame
        image={cover}
        host={hostOf(app)}
        sizes={wide ? "(min-width: 1024px) 560px, 90vw" : "(min-width: 1024px) 480px, 90vw"}
      />
      {companion && (
        <PhoneFrame image={companion} sizes="(min-width: 640px) 150px, 25vw" className="w-[24%] max-w-[150px]" />
      )}
    </div>
  );
}
