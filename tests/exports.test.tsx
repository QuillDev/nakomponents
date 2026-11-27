import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Badge,
  Button,
  Collapsible,
  CollapsibleChevron,
  CollapsibleContent,
  CollapsibleTrigger,
  ConfirmDialog,
  Input,
  Modal,
  MultiSelect,
  SearchableSelect,
  Skeleton,
  Switch,
  Textarea,
  cn,
  filterSelectKeywords,
  groupSelectOptions,
  optionKeywords,
  toggleSelection,
} from "../src/index";

describe("nakomponents", () => {
  test("cn merges conflicting tailwind utilities cleanly", () => {
    expect(cn("px-2 py-1 text-sm", "px-4")).toBe("py-1 text-sm px-4");
  });

  test("select option helpers group, filter, and enforce maxSelected", () => {
    const options = [
      { value: "a", label: "Alpha", group: "G1", keywords: ["first"] },
      { value: "b", label: "Beta", group: "G2", description: "Second item" },
      { value: "c", label: "Gamma", group: "G1" },
    ];
    const groups = groupSelectOptions(options);
    expect(groups.map((g) => g.heading)).toEqual(["G1", "G2"]);
    expect(groups[0]?.items.map((i) => i.value)).toEqual(["a", "c"]);

    expect(filterSelectKeywords("a", "first", optionKeywords(options[0]!))).toBe(1);
    expect(filterSelectKeywords("b", "second", optionKeywords(options[1]!))).toBe(1);
    expect(filterSelectKeywords("c", "nope", optionKeywords(options[2]!))).toBe(0);

    expect(toggleSelection(["a"], "b", 2)).toEqual(["a", "b"]);
    expect(toggleSelection(["a", "b"], "c", 2)).toEqual(["a", "b"]);
    expect(toggleSelection(["a", "b"], "a", 2)).toEqual(["b"]);
  });

  test("core primitives and selection controls render expected markup", () => {
    const options = [
      { value: "web", label: "Web" },
      { value: "electron", label: "Electron" },
      { value: "android", label: "Android" },
      { value: "ios", label: "iOS" },
    ];
    const html = renderToStaticMarkup(
      <div>
        <Button variant="secondary" size="sm">
          Save
        </Button>
        <Badge variant="outline">Draft</Badge>
        <Input placeholder="Email" />
        <Textarea placeholder="Body" />
        <Switch checked={true} onCheckedChange={() => {}} label="Enabled" />
        <SearchableSelect
          label="Platform"
          value="web"
          options={options}
          onValueChange={() => {}}
          clearable
        />
        <MultiSelect
          label="Targets"
          value={["web", "electron", "android", "ios"]}
          options={options}
          onValueChange={() => {}}
          maxVisibleTags={2}
        />
        <Modal title="Settings" trigger={<Button>Open</Button>}>
          Body
        </Modal>
        <ConfirmDialog
          title="Delete?"
          trigger={<Button>Remove</Button>}
          onConfirm={() => {}}
        />
        <Alert variant="destructive">
          <AlertTitle>Oops</AlertTitle>
          <AlertDescription>Failed</AlertDescription>
        </Alert>
        <Collapsible open>
          <CollapsibleTrigger>
            More
            <CollapsibleChevron />
          </CollapsibleTrigger>
          <CollapsibleContent>Hidden</CollapsibleContent>
        </Collapsible>
        <Skeleton className="h-4 w-20" />
      </div>,
    );

    expect(html).toContain('data-slot="button"');
    expect(html).toContain('data-variant="secondary"');
    expect(html).toContain('data-slot="badge"');
    expect(html).toContain('data-slot="input"');
    expect(html).toContain('data-slot="textarea"');
    expect(html).toContain('role="switch"');
    expect(html).toContain('aria-checked="true"');
    expect(html).toContain('data-slot="multi-select-trigger"');
    expect(html).toContain("+2");
    expect(html).toContain('aria-label="Clear platform"');
    expect(html).toContain('role="alert"');
    expect(html).toContain('data-slot="collapsible-chevron"');
    expect(html).toContain('data-slot="skeleton"');
  });

  test("canonical theme uses portal near-black default and light palette", () => {
    const css = readFileSync(resolve(import.meta.dir, "../src/theme.css"), "utf8");
    expect(css).toContain("--background: #09090b;");
    expect(css).toContain("--primary: #db2777;");
    expect(css).toContain(":root.light");
  });

  test("shared oxlint preset parses cleanly", () => {
    const raw = readFileSync(resolve(import.meta.dir, "../oxlint.json"), "utf8");
    const parsed = JSON.parse(raw) as { plugins?: string[] };
    expect(parsed.plugins).toContain("react");
    expect(parsed.plugins).toContain("typescript");
  });
});
