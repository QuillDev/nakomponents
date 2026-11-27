import * as React from "react";
import { ContextMenu as ContextMenuPrimitive } from "radix-ui";
declare function ContextMenu({ ...props }: React.ComponentProps<typeof ContextMenuPrimitive.Root>): React.JSX.Element;
declare function ContextMenuTrigger({ ...props }: React.ComponentProps<typeof ContextMenuPrimitive.Trigger>): React.JSX.Element;
declare function ContextMenuContent({ className, ...props }: React.ComponentProps<typeof ContextMenuPrimitive.Content>): React.JSX.Element;
declare function ContextMenuItem({ className, ...props }: React.ComponentProps<typeof ContextMenuPrimitive.Item>): React.JSX.Element;
declare function ContextMenuSeparator({ className, ...props }: React.ComponentProps<typeof ContextMenuPrimitive.Separator>): React.JSX.Element;
declare function ContextMenuLabel({ className, ...props }: React.ComponentProps<typeof ContextMenuPrimitive.Label>): React.JSX.Element;
export { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuSeparator, ContextMenuTrigger, };
