import Image from "next/image";
import type { AppEntry } from "@/types/app";
import { cn } from "@/lib/utils";
import { BrowserFrame, PhoneFrame, ScreenFrame, frameOf } from "./device-frame";

function hostOf(app: AppEntry): string | undefined {
  const first = app.links[0];
  if (!first) return undefined;
  try {
    return new URL(first.href).hostname.replace(/^www\./, "");
  } catch {
    return undefined;
  }
}

/**
 * Capa única para toda a vitrine: caixa 16:10, uma só moldura por aplicação.
 * Celulares ocupam a altura; janela e telão ocupam a largura e são cortados embaixo.
 */
export function AppCover({ app, maxPhones = 2, className }: { app: AppEntry; maxPhones?: number; className?: string }) {
  const [cover] = app.images;
  const box = cn("relative flex aspect-[16/10] w-full justify-center overflow-hidden", className);
  const background = { backgroundColor: "var(--surface-elevated)" };

  if (!cover) {
    return (
      <div className={cn(box, "items-center")} style={background}>
        {app.logo && (
          <Image
            src={app.logo.src}
            width={app.logo.width}
            height={app.logo.height}
            alt={app.logo.alt}
            sizes="160px"
            className="h-auto w-28 rounded-[1.6rem] sm:w-36"
          />
        )}
      </div>
    );
  }

  const kind = frameOf(cover);
  if (kind === "phone") {
    const phones = app.images.filter((i) => frameOf(i) === "phone").slice(0, maxPhones);
    return (
      <div className={cn(box, "items-stretch gap-3 px-6 py-6 sm:gap-4 sm:py-8")} style={background}>
        {phones.map((img, i) => (
          <PhoneFrame key={img.src} image={img} sizes="220px" className={cn(i >= 2 && "hidden sm:block")} />
        ))}
      </div>
    );
  }

  return (
    <div className={cn(box, "items-start px-6 pt-6 sm:px-8 sm:pt-8")} style={background}>
      {kind === "screen" ? (
        <ScreenFrame image={cover} sizes="(min-width: 1024px) 640px, 90vw" />
      ) : (
        <BrowserFrame image={cover} host={hostOf(app)} sizes="(min-width: 1024px) 640px, 90vw" />
      )}
    </div>
  );
}
