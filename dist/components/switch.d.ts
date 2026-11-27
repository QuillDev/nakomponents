declare function Switch({ checked, onCheckedChange, disabled, label, className, }: {
    checked: boolean;
    onCheckedChange: (checked: boolean) => void;
    disabled?: boolean;
    label?: string;
    className?: string;
}): import("react").JSX.Element;
export { Switch };
