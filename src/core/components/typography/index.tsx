import { cn } from "../../utils";
import { ComponentMap, typography, type TypographyProps } from "./utils";

export function Typography(props: TypographyProps) {
  const { variant, children, className } = props;

  const Component = ComponentMap[variant ?? "p"];

  return (
    <Component className={cn(typography({ variant, className }))}>
      {children}
    </Component>
  );
}
