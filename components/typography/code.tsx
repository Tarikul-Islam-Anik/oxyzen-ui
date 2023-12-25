import * as React from "react";
import { cn } from "@/lib/utils";

type CodeElement = React.ElementRef<"code">;

interface CodeProps {
  className?: string;
  children?: React.ReactNode;
}
const Code = React.forwardRef<CodeElement, CodeProps>((props, forwardedRef) => {
  const { children, className, ...codeProps } = props;

  return (
    <code
      {...codeProps}
      ref={forwardedRef}
      className={cn("font-mono text-sm p-1.5 bg-gray-400/20 rounded-md", className)}
      children={children}
    />
  );
});
Code.displayName = "Code";

export { Code };
export type { CodeProps };
