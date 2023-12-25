import { cn } from "@/lib/utils";
import * as React from "react";

type KbdElement = React.ElementRef<"kbd">;

interface KbdProps extends React.ComponentPropsWithoutRef<"kbd"> {
  className?: string;
  children?: React.ReactNode;
}

const Kbd = React.forwardRef<KbdElement, KbdProps>((props, forwardedRef) => {
  const { className, children, ...kbdProps } = props;

  return (
    <kbd
      {...kbdProps}
      ref={forwardedRef}
      className={cn(
        "px-2 py-1.5 text-xs font-mono font-semibold border rounded-md bg-gray-50 dark:bg-gray-800 dark:border-gray-700 border-b-2",
        className
      )}
      children={children}
    />
  );
});
Kbd.displayName = "Kbd";

export { Kbd };
export type { KbdProps };
