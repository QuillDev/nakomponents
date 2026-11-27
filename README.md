# nakomponents

Shared UI primitives, canonical near-black Tailwind v4 theme tokens, and shared `oxlint` preset for QuillDev web apps (`nako-portal`, `Nanime`, `nanotes`, `nakotoba`).

## Usage

Install via Bun:

```bash
bun add github:QuillDev/nakomponents
```

Import the canonical theme once in your app's CSS entrypoint:

```css
@import "nakomponents/theme.css";
```

Import primitives and plug-and-play controls:

```tsx
import {
  Button,
  ConfirmDialog,
  Input,
  Modal,
  MultiSelect,
  SearchableSelect,
  Switch,
} from "nakomponents";
```

Extend the shared `oxlint` config in `.oxlintrc.json`:

```json
{
  "extends": ["./node_modules/nakomponents/oxlint.json"]
}
```

## Development

```bash
bun install
bun run dev       # interactive preview gallery
bun run check     # typecheck + oxlint + react-doctor + bun test
bun run build     # build dist/ (ESM + .d.ts + theme.css)
```
