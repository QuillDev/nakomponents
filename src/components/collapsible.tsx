import * as React from "react";
import { ChevronDownIcon } from "lucide-react";
import { Collapsible as CollapsiblePrimitive } from "radix-ui";
import { cn } from "../lib/utils";

function Collapsible({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root>) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />;
}

function CollapsibleTrigger({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      {...props}
    />
  );
}

function CollapsibleContent({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>) {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      data-slot="collapsible-content"
      {...props}
    />
  );
}

function CollapsibleChevron({ className }: { className?: string }) {
  return (
    <ChevronDownIcon
      data-slot="collapsible-chevron"
      className={cn(
        "size-4 shrink-0 transition-transform duration-200",
        className,
      )}
    />
  );
}

export {
  Collapsible,
  CollapsibleChevron,
  CollapsibleContent,
  CollapsibleTrigger,
};
