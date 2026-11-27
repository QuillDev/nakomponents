import * as React from "react";
import { ScrollArea as ScrollAreaPrimitive } from "radix-ui";
declare function ScrollBar({ className, orientation, ...props }: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>): React.JSX.Element;
declare function ScrollArea({ className, children, ...props }: React.ComponentProps<typeof ScrollAreaPrimitive.Root>): React.JSX.Element;
export { ScrollArea, ScrollBar };
