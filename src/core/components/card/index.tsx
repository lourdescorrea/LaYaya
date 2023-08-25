import type { PropsWithChildren, ReactNode } from "react";
import type { IconType } from "react-icons";

import { cn } from "../../utils";
import { Button } from "../button";

interface CardProps {
  className?: string;
  topComponent?: ReactNode;
  title?: string;
  topAction?: {
    icon: IconType;
    onClick: () => void;
    disabled?: boolean;
  };
}

export function Card(props: PropsWithChildren<CardProps>) {
  const { className, children, title, topAction, topComponent } = props;
  return (
    <div
      className={cn(
        "!z-5 relative flex flex-col rounded-[20px] bg-card bg-clip-border shadow-3xl shadow-shadow-500 dark:shadow-none",
        className
      )}
    >
      {(title || topAction) && (
        <header className="relative flex items-center justify-between">
          {title && <div className="pb-4 text-xl font-bold ">{title}</div>}

          {topComponent && topComponent}

          {topAction && (
            <Button onClick={topAction.onClick} size="icon" variant="outline">
              <topAction.icon className="h-6 w-6" />
            </Button>
          )}
        </header>
      )}

      {children}
    </div>
  );
}
