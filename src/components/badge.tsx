import * as React from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import { badgeVariants } from "../lib/variants";

export type BadgeProps = React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants>;

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge };
