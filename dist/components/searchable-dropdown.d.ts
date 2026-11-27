import type { ComponentProps, ReactNode } from "react";
import { Popover } from "radix-ui";
import { CommandList } from "./command";
declare function DropdownContent({ className, ...props }: ComponentProps<typeof Popover.Content>): import("react").JSX.Element;
declare function DropdownList({ className, ...props }: ComponentProps<typeof CommandList>): import("react").JSX.Element;
export type SearchableDropdownOption<T extends string> = {
    value: T;
    label: string;
    detail?: string;
    disabled?: boolean;
};
declare function SearchableDropdown<T extends string>({ label, value, options, onPick, className, icon, compact, side, align, placeholder, }: {
    label: string;
    value: T;
    options: SearchableDropdownOption<T>[];
    onPick: (value: T) => void;
    className?: string;
    icon?: ReactNode;
    compact?: boolean;
    side?: "top" | "bottom";
    align?: "start" | "end";
    placeholder?: string;
}): import("react").JSX.Element;
export { DropdownContent, DropdownList, SearchableDropdown };
