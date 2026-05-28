import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[#FFEB00] text-[#0a0a0f] hover:bg-[#FFEB00]/90 hover:shadow-[0_0_32px_rgba(255,235,0,0.4)] focus-visible:ring-[#FFEB00]",
        secondary:
          "bg-[#15151f] text-[#F5F5FA] border border-[#2A2A35] hover:border-[#3A3A48] hover:bg-[#1A1A26]",
        ghost:
          "text-[#F5F5FA] hover:bg-[#15151f] hover:text-[#FFEB00]",
        link: "text-[#FFEB00] underline-offset-4 hover:underline",
        outline:
          "border border-[#F5F5FA] text-[#F5F5FA] hover:bg-[#F5F5FA] hover:text-[#0a0a0f]",
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
