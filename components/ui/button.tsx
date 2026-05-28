import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-bg] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[--color-accent-yellow] text-[--color-bg] hover:bg-[--color-accent-yellow]/90 hover:shadow-[0_0_32px_rgba(255,235,0,0.4)] focus-visible:ring-[--color-accent-yellow]",
        secondary:
          "bg-[--color-surface] text-[--color-text] border border-[--color-border] hover:border-[--color-border-strong] hover:bg-[--color-surface-elevated]",
        ghost:
          "text-[--color-text] hover:bg-[--color-surface] hover:text-[--color-accent-yellow]",
        link: "text-[--color-accent-yellow] underline-offset-4 hover:underline",
        outline:
          "border border-[--color-text] text-[--color-text] hover:bg-[--color-text] hover:text-[--color-bg]",
      },
      size: {
        sm: "h-9 px-4 text-sm rounded-md",
        md: "h-11 px-6 text-base rounded-md",
        lg: "h-14 px-8 text-lg rounded-lg",
        xl: "h-16 px-10 text-xl rounded-lg",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
