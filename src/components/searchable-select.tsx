import { useMemo, useState, type ReactNode } from "react";
import { CheckIcon, ChevronDownIcon, XIcon } from "lucide-react";
import { Popover } from "radix-ui";
import {
  filterSelectKeywords,
  groupSelectOptions,
  optionKeywords,
  type SelectOption,
} from "../lib/select-options";
import { cn } from "../lib/utils";
import { Button } from "./button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./command";
import { DropdownContent, DropdownList } from "./searchable-dropdown";

export type SearchableSelectProps<T extends string = string> = {
  readonly value: T | null | undefined;
  readonly options: readonly SelectOption<T>[];
  readonly onValueChange: (value: T | null) => void;
  readonly label?: string;
  readonly placeholder?: string;
  readonly searchPlaceholder?: string;
  readonly emptyText?: string;
  readonly clearable?: boolean;
  readonly disabled?: boolean;
  readonly loading?: boolean;
  readonly icon?: ReactNode;
  readonly className?: string;
  readonly contentClassName?: string;
  readonly side?: "top" | "bottom";
  readonly align?: "start" | "center" | "end";
};

function OptionRow<T extends string>({
  option,
  selected,
  onSelect,
}: {
  readonly option: SelectOption<T>;
  readonly selected: boolean;
  readonly onSelect: (value: T) => void;
}) {
  return (
    <CommandItem
      value={option.value}
      keywords={optionKeywords(option)}
      disabled={option.disabled}
      className="min-h-9 max-sm:min-h-11"
      onSelect={() => onSelect(option.value)}
    >
      <span className="min-w-0 flex-1">
        <span className="block truncate">{option.label}</span>
        {option.description && (
          <span className="block truncate text-xs text-muted-foreground">
            {option.description}
          </span>
        )}
      </span>
      {selected && (
        <CheckIcon
          aria-label="Selected"
          className="size-4 shrink-0 text-primary"
        />
      )}
    </CommandItem>
  );
}

function SearchableSelect<T extends string = string>({
  value,
  options,
  onValueChange,
  label = "Select option",
  placeholder = "Select an option...",
  searchPlaceholder = "Search...",
  emptyText = "No matches.",
  clearable = false,
  disabled = false,
  loading = false,
  icon,
  className,
  contentClassName,
  side,
  align = "start",
}: SearchableSelectProps<T>) {
  const [open, setOpen] = useState(false);
  const selected = useMemo(
    () => options.find((option) => option.value === value),
    [options, value],
  );
  const groups = useMemo(() => groupSelectOptions(options), [options]);

  const handleSelect = (nextValue: T) => {
    onValueChange(nextValue);
    setOpen(false);
  };

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <div className={cn("relative flex min-w-0 items-center", className)}>
        <Popover.Trigger asChild>
          <Button
            type="button"
            variant="outline"
            size="sm"
            disabled={disabled}
            aria-label={label}
            aria-expanded={open}
            className={cn(
              "h-9 w-full min-w-0 justify-between rounded-md px-3 font-normal",
              clearable && selected && "pr-14",
            )}
          >
            <span className="flex min-w-0 flex-1 items-center gap-2">
              {icon}
              <span
                className={cn(
                  "min-w-0 truncate text-left",
                  !selected && "text-muted-foreground",
                )}
              >
                {selected?.label ?? placeholder}
              </span>
            </span>
            <ChevronDownIcon className="size-3.5 shrink-0 text-muted-foreground" />
          </Button>
        </Popover.Trigger>
        {clearable && selected && !disabled && (
          <button
            type="button"
            aria-label={`Clear ${label.toLowerCase()}`}
            onClick={() => onValueChange(null)}
            className="absolute right-8 flex size-5 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <XIcon className="size-3.5" />
          </button>
        )}
      </div>
      <DropdownContent
        aria-label={label}
        side={side}
        align={align}
        className={cn(
          "w-(--radix-popover-trigger-width) min-w-56",
          contentClassName,
        )}
      >
        <Command label={label} loop filter={filterSelectKeywords}>
          <CommandInput
            aria-label={`Search ${label.toLowerCase()}`}
            placeholder={searchPlaceholder}
          />
          <DropdownList className="p-1">
            {loading ? (
              <div className="py-6 text-center text-sm text-muted-foreground">
                Loading...
              </div>
            ) : (
              <>
                <CommandEmpty>{emptyText}</CommandEmpty>
                {groups.map((group) =>
                  group.heading ? (
                    <CommandGroup key={group.heading} heading={group.heading}>
                      {group.items.map((option) => (
                        <OptionRow
                          key={option.value}
                          option={option}
                          selected={option.value === value}
                          onSelect={handleSelect}
                        />
                      ))}
                    </CommandGroup>
                  ) : (
                    group.items.map((option) => (
                      <OptionRow
                        key={option.value}
                        option={option}
                        selected={option.value === value}
                        onSelect={handleSelect}
                      />
                    ))
                  ),
                )}
              </>
            )}
          </DropdownList>
        </Command>
      </DropdownContent>
    </Popover.Root>
  );
}

export { SearchableSelect };
