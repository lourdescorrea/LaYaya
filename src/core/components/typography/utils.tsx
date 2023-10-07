import { cva, type VariantProps } from "class-variance-authority";
import type { PropsWithChildren } from "react";

export const typography = cva("", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      p: "leading-7 [&:not(:first-child)]:mt-6",
      lead: "text-xl text-muted-foreground",
      small: "text-sm font-medium leading-none md:text-base",
      large: "text-lg font-semibold",
      muted: "text-sm text-slate-500 md:text-base",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

type Variant = VariantProps<typeof typography>["variant"];

export interface TypographyProps extends PropsWithChildren {
  variant: Variant;
  className?: string;
}

export const ComponentMap = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  p: "p",
  lead: "p",
  small: "small",
  large: "div",
  muted: "p",
} as const;
