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
export declare function groupSelectOptions<T extends string>(options: readonly SelectOption<T>[]): OptionGroup<T>[];
export declare function optionKeywords<T extends string>(option: SelectOption<T>): string[];
export declare function filterSelectKeywords(_value: string, query: string, keywords?: string[]): number;
export declare function toggleSelection<T extends string>(current: readonly T[], target: T, maxSelected?: number): T[];
