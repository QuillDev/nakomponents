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
  Input,
  Skeleton,
  Switch,
  Textarea,
  cn,
} from "../src/index";

describe("nakomponents", () => {
  test("cn merges conflicting tailwind utilities cleanly", () => {
    expect(cn("px-2 py-1 text-sm", "px-4")).toBe("py-1 text-sm px-4");
  });

  test("core primitives render expected semantic markup and data-slot attributes", () => {
    const html = renderToStaticMarkup(
      <div>
        <Button variant="secondary" size="sm">
          Save
        </Button>
        <Badge variant="outline">Draft</Badge>
        <Input placeholder="Email" />
        <Textarea placeholder="Body" />
        <Switch checked={true} onCheckedChange={() => {}} label="Enabled" />
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
