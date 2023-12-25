import React from 'react';
import { Text } from './text';
import { cn } from '@/lib/utils';

type BlockquoteElement = React.ElementRef<'blockquote'>;

interface BlockquoteProps {
  className?: string;
  children?: React.ReactNode;
}

const Blockquote = React.forwardRef<BlockquoteElement, BlockquoteProps>(
  (props, forwardedRef) => {
    const { children, className, ...blockquoteProps } = props;
    return (
      <Text
        asChild
        {...blockquoteProps}
        ref={forwardedRef}
        className={cn(
          'border-l-8 border-primary/25 pl-4 text-lg',
          className
        )}
      >
        <blockquote>{children}</blockquote>
      </Text>
    );
  }
);
Blockquote.displayName = 'Blockquote';

export { Blockquote };
export type { BlockquoteProps };
