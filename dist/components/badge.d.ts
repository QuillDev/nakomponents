import * as React from "react";
import type { VariantProps } from "class-variance-authority";
import { badgeVariants } from "../lib/variants";
export type BadgeProps = React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>;
declare function Badge({ className, variant, ...props }: BadgeProps): React.JSX.Element;
export { Badge };
