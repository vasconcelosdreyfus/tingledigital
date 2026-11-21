import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/primitives/container";
import { SITE_URL } from "@/lib/social-metadata";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href.startsWith("http") ? item.href : `${SITE_URL}${item.href}`,
    })),
  };

  return (
    <div className="relative z-10 -mb-16 pt-6 lg:-mb-20 lg:pt-8">
      <Container>
        <nav aria-label="Breadcrumb">
          <ol
            className="flex flex-wrap items-center gap-1.5 text-xs"
            style={{ color: "var(--text-secondary)" }}
          >
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              return (
                <li key={item.href} className="inline-flex items-center gap-1.5">
                  {index > 0 && (
                    <ChevronRight className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />
                  )}
                  {isLast ? (
                    <span
                      aria-current="page"
                      className="font-medium"
                      style={{ color: "var(--text)" }}
                    >
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="transition-colors hover:underline"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
