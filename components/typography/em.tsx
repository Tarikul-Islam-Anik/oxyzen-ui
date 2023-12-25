import React from 'react';
import { cn } from '@/lib/utils';

type EmElement = React.ElementRef<'em'>;
interface EmProps extends React.ComponentPropsWithoutRef<'em'> {}
const Em = React.forwardRef<EmElement, EmProps>((props, forwardedRef) => (
  <em {...props} ref={forwardedRef} className={cn('italic', props.className)} />
));
Em.displayName = 'Em';

export { Em };
export type { EmProps };
