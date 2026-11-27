import * as React from "react";
import type { VariantProps } from "class-variance-authority";
import { alertVariants } from "../lib/variants";
declare function Alert({ className, variant, ...props }: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>): React.JSX.Element;
declare function AlertTitle({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function AlertDescription({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
export { Alert, AlertDescription, AlertTitle };
