import { useMemo, useState } from "react";
import { CheckIcon, ChevronDownIcon, XIcon } from "lucide-react";
import { Popover } from "radix-ui";
import {
  filterSelectKeywords,
  groupSelectOptions,
  optionKeywords,
  toggleSelection,
  type OptionGroup,
  type SelectOption,
} from "../lib/select-options";
import { cn } from "../lib/utils";
import { Badge } from "./badge";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./command";
import { DropdownContent, DropdownList } from "./searchable-dropdown";

export type MultiSelectProps<T extends string = string> = {
  readonly value: readonly T[];
  readonly options: readonly SelectOption<T>[];
  readonly onValueChange: (value: T[]) => void;
  readonly label?: string;
  readonly placeholder?: string;
  readonly searchPlaceholder?: string;
  readonly emptyText?: string;
  readonly maxVisibleTags?: number;
  readonly maxSelected?: number;
  readonly clearable?: boolean;
  readonly showSelectAll?: boolean;
  readonly disabled?: boolean;
  readonly className?: string;
  readonly contentClassName?: string;
  readonly side?: "top" | "bottom";
  readonly align?: "start" | "center" | "end";
};

function MultiOptionRow<T extends string>({
  option,
  selected,
  disabled,
  onToggle,
}: {
  readonly option: SelectOption<T>;
  readonly selected: boolean;
  readonly disabled: boolean;
  readonly onToggle: (value: T) => void;
}) {
  return (
    <CommandItem
      value={option.value}
      keywords={optionKeywords(option)}
      disabled={disabled}
      className="min-h-9 max-sm:min-h-11"
      onSelect={() => onToggle(option.value)}
    >
      <span
        aria-hidden="true"
        className={cn(
          "flex size-4 shrink-0 items-center justify-center rounded-[4px] border transition-colors",
          selected
            ? "border-primary bg-primary text-primary-foreground"
            : "border-input bg-transparent",
        )}
      >
        {selected && <CheckIcon className="size-3" />}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate">{option.label}</span>
        {option.description && (
          <span className="block truncate text-xs text-muted-foreground">
            {option.description}
          </span>
        )}
      </span>
    </CommandItem>
  );
}

function MultiOptionGroups<T extends string>({
  groups,
  selectedSet,
  atLimit,
  onToggle,
}: {
  readonly groups: readonly OptionGroup<T>[];
  readonly selectedSet: ReadonlySet<T>;
  readonly atLimit: boolean;
  readonly onToggle: (value: T) => void;
}) {
  return (
    <>
      {groups.map((group) => {
        const rows = group.items.map((option) => {
          const isSelected = selectedSet.has(option.value);
          const isDisabled = Boolean(option.disabled || (!isSelected && atLimit));
          return (
            <MultiOptionRow
              key={option.value}
              option={option}
              selected={isSelected}
              disabled={isDisabled}
              onToggle={onToggle}
            />
          );
        });
        return group.heading ? (
          <CommandGroup key={group.heading} heading={group.heading}>
            {rows}
          </CommandGroup>
        ) : (
          rows
        );
      })}
    </>
  );
}

function MultiSelectTrigger<T extends string>({
  label,
  placeholder,
  open,
  disabled,
  clearable,
  selectedOptions,
  maxVisibleTags,
  onRemove,
  onClear,
}: {
  readonly label: string;
  readonly placeholder: string;
  readonly open: boolean;
  readonly disabled: boolean;
  readonly clearable: boolean;
  readonly selectedOptions: readonly SelectOption<T>[];
  readonly maxVisibleTags: number;
  readonly onRemove: (value: T) => void;
  readonly onClear: () => void;
}) {
  const visibleTags = selectedOptions.slice(0, maxVisibleTags);
  const overflowCount = selectedOptions.length - visibleTags.length;

  return (
    <div
      data-slot="multi-select-trigger"
      className={cn(
        "flex min-h-9 w-full min-w-0 items-center gap-1 rounded-md border border-input bg-background px-2 py-1 text-sm shadow-[0_2px_5px_rgb(0_0_0/14%)] transition-colors hover:bg-accent/40 dark:bg-input/30 dark:hover:bg-input/50",
        disabled && "pointer-events-none opacity-50",
      )}
    >
      <div className="flex min-w-0 flex-1 flex-wrap items-center gap-1">
        {visibleTags.map((option) => (
          <Badge
            key={option.value}
            variant="secondary"
            className="max-w-40 gap-1 pr-1"
          >
            <span className="truncate">{option.label}</span>
            <button
              type="button"
              disabled={disabled}
              aria-label={`Remove ${option.label}`}
              onClick={() => onRemove(option.value)}
              className="rounded-full p-0.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <XIcon className="size-3" />
            </button>
          </Badge>
        ))}
        {overflowCount > 0 && <Badge variant="outline">+{overflowCount}</Badge>}
        <Popover.Trigger asChild>
          <button
            type="button"
            disabled={disabled}
            aria-label={label}
            aria-expanded={open}
            className="flex min-h-6 min-w-6 flex-1 items-center justify-between gap-2 px-1 text-left outline-none"
          >
            <span className="truncate text-muted-foreground">
              {selectedOptions.length === 0 ? placeholder : ""}
            </span>
            <ChevronDownIcon className="size-3.5 shrink-0 text-muted-foreground" />
          </button>
        </Popover.Trigger>
      </div>
      {clearable && selectedOptions.length > 0 && !disabled && (
        <button
          type="button"
          aria-label={`Clear ${label.toLowerCase()}`}
          onClick={onClear}
          className="flex size-5 shrink-0 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          <XIcon className="size-3.5" />
        </button>
      )}
    </div>
  );
}

function MultiSelectFooter({
  count,
  showSelectAll,
  onSelectAll,
  onClear,
}: {
  readonly count: number;
  readonly showSelectAll: boolean;
  readonly onSelectAll: () => void;
  readonly onClear: () => void;
}) {
  if (!showSelectAll && count === 0) {
    return null;
  }
  return (
    <div className="flex items-center justify-between border-t px-2.5 py-1.5 text-xs text-muted-foreground">
      <span>{count} selected</span>
      <div className="flex items-center gap-2">
        {showSelectAll && (
          <button
            type="button"
            onClick={onSelectAll}
            className="font-medium text-foreground transition-colors hover:text-primary"
          >
            Select all
          </button>
        )}
        {count > 0 && (
          <button
            type="button"
            onClick={onClear}
            className="font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
}

function MultiSelect<T extends string = string>({
  value,
  options,
  onValueChange,
  label = "Select options",
  placeholder = "Select options...",
  searchPlaceholder = "Search...",
  emptyText = "No matches.",
  maxVisibleTags = 3,
  maxSelected,
  clearable = true,
  showSelectAll = false,
  disabled = false,
  className,
  contentClassName,
  side,
  align = "start",
}: MultiSelectProps<T>) {
  const [open, setOpen] = useState(false);
  const selectedSet = useMemo(() => new Set(value), [value]);
  const selectedOptions = useMemo(() => {
    const byValue = new Map(options.map((option) => [option.value, option]));
    return value
      .map((item) => byValue.get(item))
      .filter((item): item is SelectOption<T> => item !== undefined);
  }, [options, value]);
  const groups = useMemo(() => groupSelectOptions(options), [options]);
  const atLimit = maxSelected !== undefined && value.length >= maxSelected;

  const handleToggle = (target: T) => {
    onValueChange(toggleSelection(value, target, maxSelected));
  };

  const handleSelectAll = () => {
    const enabled = options
      .filter((option) => !option.disabled)
      .map((option) => option.value);
    onValueChange(
      maxSelected !== undefined ? enabled.slice(0, maxSelected) : enabled,
    );
  };

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <div className={cn("min-w-0", className)}>
        <MultiSelectTrigger
          label={label}
          placeholder={placeholder}
          open={open}
          disabled={disabled}
          clearable={clearable}
          selectedOptions={selectedOptions}
          maxVisibleTags={maxVisibleTags}
          onRemove={handleToggle}
          onClear={() => onValueChange([])}
        />
      </div>
      <DropdownContent
        aria-label={label}
        side={side}
        align={align}
        className={cn(
          "w-(--radix-popover-trigger-width) min-w-60",
          contentClassName,
        )}
      >
        <Command label={label} loop filter={filterSelectKeywords}>
          <CommandInput
            aria-label={`Search ${label.toLowerCase()}`}
            placeholder={searchPlaceholder}
          />
          <DropdownList className="p-1">
            <CommandEmpty>{emptyText}</CommandEmpty>
            <MultiOptionGroups
              groups={groups}
              selectedSet={selectedSet}
              atLimit={atLimit}
              onToggle={handleToggle}
            />
          </DropdownList>
          <MultiSelectFooter
            count={value.length}
            showSelectAll={showSelectAll}
            onSelectAll={handleSelectAll}
            onClear={() => onValueChange([])}
          />
        </Command>
      </DropdownContent>
    </Popover.Root>
  );
}

export { MultiSelect };
