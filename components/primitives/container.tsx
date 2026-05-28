import * as React from "react";
import { cn } from "@/lib/utils";

type ContainerSize = "sm" | "md" | "lg" | "xl" | "full";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize;
  as?: keyof React.JSX.IntrinsicElements;
}

const sizeMap: Record<ContainerSize, string> = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  xl: "max-w-[1440px]",
  full: "max-w-none",
};

export function Container({
  className,
  size = "lg",
  as: Component = "div",
  ...props
}: ContainerProps) {
  return React.createElement(Component as string, {
    className: cn("mx-auto w-full px-6 sm:px-8 lg:px-12", sizeMap[size], className),
    ...props,
  });
}
