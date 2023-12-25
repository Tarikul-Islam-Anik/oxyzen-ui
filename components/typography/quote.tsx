import { cn } from "@/lib/utils";
import * as React from "react";

type QuoteElement = React.ElementRef<"q">;
interface QuoteProps extends React.ComponentPropsWithoutRef<"q"> {}
const Quote = React.forwardRef<QuoteElement, QuoteProps>(
  (props, forwardedRef) => (
    <q
      {...props}
      ref={forwardedRef}
      className={cn(
        " *:before { content: '\\201C' } *:after { content: '\\201D' } italic",
        props.className
      )}
    />
  )
);
Quote.displayName = "Quote";

export { Quote };
export type { QuoteProps };
