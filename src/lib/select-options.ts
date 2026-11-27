export type SelectOption<T extends string = string> = {
  readonly value: T;
  readonly label: string;
  readonly description?: string;
  readonly group?: string;
  readonly keywords?: readonly string[];
  readonly disabled?: boolean;
};

export type OptionGroup<T extends string = string> = {
  readonly heading: string | undefined;
  readonly items: readonly SelectOption<T>[];
};

export function groupSelectOptions<T extends string>(
  options: readonly SelectOption<T>[],
): OptionGroup<T>[] {
  const groups = new Map<string | undefined, SelectOption<T>[]>();
  for (const option of options) {
    const key = option.group;
    const bucket = groups.get(key);
    if (bucket) {
      bucket.push(option);
    } else {
      groups.set(key, [option]);
    }
  }
  return Array.from(groups, ([heading, items]) => ({ heading, items }));
}

export function optionKeywords<T extends string>(
  option: SelectOption<T>,
): string[] {
  const parts = [option.label];
  if (option.description) {
    parts.push(option.description);
  }
  if (option.group) {
    parts.push(option.group);
  }
  if (option.keywords) {
    parts.push(...option.keywords);
  }
  return parts;
}

export function filterSelectKeywords(
  _value: string,
  query: string,
  keywords?: string[],
): number {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) {
    return 1;
  }
  if (!keywords?.length) {
    return 0;
  }
  const haystack = keywords.join(" ").toLowerCase();
  return haystack.includes(trimmed) ? 1 : 0;
}

export function toggleSelection<T extends string>(
  current: readonly T[],
  target: T,
  maxSelected?: number,
): T[] {
  if (current.includes(target)) {
    return current.filter((item) => item !== target);
  }
  if (maxSelected !== undefined && current.length >= maxSelected) {
    return [...current];
  }
  return [...current, target];
}
