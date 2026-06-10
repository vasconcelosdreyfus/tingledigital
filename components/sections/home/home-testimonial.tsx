import * as React from "react";
import { Container } from "@/components/primitives/container";

interface HomeTestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export function HomeTestimonial({ quote, author, role, company }: HomeTestimonialProps) {
  return (
    <section className="bg-[#FAFAF9] py-24 lg:py-32 border-y border-[#E5E5E3]">
      <Container size="md">
        <blockquote className="text-center">
          <p className="text-display-3 font-medium text-[#0A0A0A] text-balance leading-tight">
            &ldquo;{quote}&rdquo;
          </p>
          <footer className="mt-10 flex items-center justify-center gap-4">
            <div className="h-12 w-12 rounded-full bg-[#0A0A0A] flex items-center justify-center text-white text-sm font-semibold">
              {author
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("")}
            </div>
            <div className="text-left">
              <p className="font-semibold text-[#0A0A0A]">{author}</p>
              <p className="text-sm text-[#6B6B6B]">
                {role} · {company}
              </p>
            </div>
          </footer>
        </blockquote>
      </Container>
    </section>
  );
}
