import { useState as e } from "react";
import { clsx as t } from "clsx";
import { twMerge as n } from "tailwind-merge";
import { cva as r } from "class-variance-authority";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
import { Collapsible as o, ContextMenu as s, Dialog as c, DropdownMenu as l, HoverCard as u, Popover as d, ScrollArea as f, Slot as p, Tooltip as m } from "radix-ui";
import { CheckIcon as h, ChevronDownIcon as g, ChevronRightIcon as _, CircleIcon as v, SearchIcon as y, XIcon as ee } from "lucide-react";
import { Command as b } from "cmdk";
// src/lib/utils.ts
function x(...e) {
	return n(t(e));
}
// src/lib/variants.ts
var S = r("relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg border px-4 py-3 text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current", {
	variants: { variant: {
		default: "bg-card text-card-foreground",
		destructive: "bg-card text-destructive *:data-[slot=alert-description]:text-destructive/90 [&>svg]:text-current"
	} },
	defaultVariants: { variant: "default" }
}), C = r("inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium transition-colors", {
	variants: { variant: {
		default: "bg-primary text-primary-foreground",
		secondary: "bg-secondary text-secondary-foreground",
		outline: "border border-border text-foreground",
		destructive: "bg-destructive/15 text-destructive"
	} },
	defaultVariants: { variant: "default" }
}), w = r("inline-flex shrink-0 items-center justify-center gap-2 rounded-full text-sm font-medium whitespace-nowrap transition-all outline-none disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/90",
			destructive: "bg-destructive text-white hover:bg-destructive/90 dark:bg-destructive/60",
			outline: "border bg-background shadow-[0_2px_5px_rgb(0_0_0/14%)] hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2 has-[>svg]:px-3",
			xs: "h-6 gap-1 px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
			sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
			lg: "h-10 px-6 has-[>svg]:px-4",
			icon: "size-9",
			"icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
			"icon-sm": "size-8",
			"icon-lg": "size-10"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
// src/components/alert.tsx
function te({ className: e, variant: t, ...n }) {
	return /* @__PURE__ */ i("div", {
		"data-slot": "alert",
		role: "alert",
		className: x(S({ variant: t }), e),
		...n
	});
}
function T({ className: e, ...t }) {
	return /* @__PURE__ */ i("div", {
		"data-slot": "alert-title",
		className: x("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", e),
		...t
	});
}
function E({ className: e, ...t }) {
	return /* @__PURE__ */ i("div", {
		"data-slot": "alert-description",
		className: x("col-start-2 grid justify-items-start gap-1 text-sm text-muted-foreground [&_p]:leading-relaxed", e),
		...t
	});
}
// src/components/badge.tsx
function ne({ className: e, variant: t, ...n }) {
	return /* @__PURE__ */ i("span", {
		"data-slot": "badge",
		className: x(C({ variant: t }), e),
		...n
	});
}
// src/components/button.tsx
function D({ className: e, variant: t = "default", size: n = "default", asChild: r = !1, ...a }) {
	let o = r ? p.Root : "button";
	return /* @__PURE__ */ i(o, {
		"data-slot": "button",
		"data-variant": t,
		"data-size": n,
		className: x(w({
			variant: t,
			size: n,
			className: e
		})),
		...a
	});
}
// src/components/collapsible.tsx
function re({ ...e }) {
	return /* @__PURE__ */ i(o.Root, {
		"data-slot": "collapsible",
		...e
	});
}
function O({ ...e }) {
	return /* @__PURE__ */ i(o.CollapsibleTrigger, {
		"data-slot": "collapsible-trigger",
		...e
	});
}
function k({ ...e }) {
	return /* @__PURE__ */ i(o.CollapsibleContent, {
		"data-slot": "collapsible-content",
		...e
	});
}
function A({ className: e }) {
	return /* @__PURE__ */ i(g, {
		"data-slot": "collapsible-chevron",
		className: x("size-4 shrink-0 transition-transform duration-200", e)
	});
}
// src/components/dialog.tsx
function j({ ...e }) {
	return /* @__PURE__ */ i(c.Root, {
		"data-slot": "dialog",
		...e
	});
}
function M({ ...e }) {
	return /* @__PURE__ */ i(c.Trigger, {
		"data-slot": "dialog-trigger",
		...e
	});
}
function N({ ...e }) {
	return /* @__PURE__ */ i(c.Portal, {
		"data-slot": "dialog-portal",
		...e
	});
}
function ie({ ...e }) {
	return /* @__PURE__ */ i(c.Close, {
		"data-slot": "dialog-close",
		...e
	});
}
function P({ className: e, ...t }) {
	return /* @__PURE__ */ i(c.Overlay, {
		"data-slot": "dialog-overlay",
		className: x("fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0", e),
		...t
	});
}
function F({ className: e, children: t, showCloseButton: n = !0, ...r }) {
	return /* @__PURE__ */ a(N, {
		"data-slot": "dialog-portal",
		children: [/* @__PURE__ */ i(P, {}), /* @__PURE__ */ a(c.Content, {
			"data-slot": "dialog-content",
			className: x("fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-lg", e),
			...r,
			children: [t, n && /* @__PURE__ */ a(c.Close, {
				"data-slot": "dialog-close",
				className: "absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				children: [/* @__PURE__ */ i(ee, {}), /* @__PURE__ */ i("span", {
					className: "sr-only",
					children: "Close"
				})]
			})]
		})]
	});
}
function I({ className: e, ...t }) {
	return /* @__PURE__ */ i("div", {
		"data-slot": "dialog-header",
		className: x("flex flex-col gap-2 text-center sm:text-left", e),
		...t
	});
}
function L({ className: e, showCloseButton: t = !1, children: n, ...r }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "dialog-footer",
		className: x("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
		...r,
		children: [n, t && /* @__PURE__ */ i(c.Close, {
			asChild: !0,
			children: /* @__PURE__ */ i(D, {
				variant: "outline",
				children: "Close"
			})
		})]
	});
}
function R({ className: e, ...t }) {
	return /* @__PURE__ */ i(c.Title, {
		"data-slot": "dialog-title",
		className: x("text-lg leading-none font-semibold", e),
		...t
	});
}
function z({ className: e, ...t }) {
	return /* @__PURE__ */ i(c.Description, {
		"data-slot": "dialog-description",
		className: x("text-sm text-muted-foreground", e),
		...t
	});
}
// src/components/command.tsx
function B({ className: e, ...t }) {
	return /* @__PURE__ */ i(b, {
		"data-slot": "command",
		className: x("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", e),
		...t
	});
}
function V({ title: e = "Command Palette", description: t = "Search for a command to run...", children: n, className: r, showCloseButton: o = !0, ...s }) {
	return /* @__PURE__ */ a(j, {
		...s,
		children: [/* @__PURE__ */ a(I, {
			className: "sr-only",
			children: [/* @__PURE__ */ i(R, { children: e }), /* @__PURE__ */ i(z, { children: t })]
		}), /* @__PURE__ */ i(F, {
			className: x("overflow-hidden p-0", r),
			showCloseButton: o,
			children: /* @__PURE__ */ i(B, {
				className: "**:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
				children: n
			})
		})]
	});
}
function H({ className: e, ...t }) {
	return /* @__PURE__ */ a("div", {
		"data-slot": "command-input-wrapper",
		className: "flex h-9 items-center gap-2 border-b px-3",
		children: [/* @__PURE__ */ i(y, { className: "size-4 shrink-0 opacity-50" }), /* @__PURE__ */ i(b.Input, {
			"data-slot": "command-input",
			className: x("flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", e),
			...t
		})]
	});
}
function U({ className: e, ...t }) {
	return /* @__PURE__ */ i(b.List, {
		"data-slot": "command-list",
		className: x("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", e),
		...t
	});
}
function W({ ...e }) {
	return /* @__PURE__ */ i(b.Empty, {
		"data-slot": "command-empty",
		className: "py-6 text-center text-sm",
		...e
	});
}
function G({ className: e, ...t }) {
	return /* @__PURE__ */ i(b.Group, {
		"data-slot": "command-group",
		className: x("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", e),
		...t
	});
}
function K({ className: e, ...t }) {
	return /* @__PURE__ */ i(b.Separator, {
		"data-slot": "command-separator",
		className: x("-mx-1 h-px bg-border", e),
		...t
	});
}
function q({ className: e, ...t }) {
	return /* @__PURE__ */ i(b.Item, {
		"data-slot": "command-item",
		className: x("relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", e),
		...t
	});
}
function J({ className: e, ...t }) {
	return /* @__PURE__ */ i("span", {
		"data-slot": "command-shortcut",
		className: x("ml-auto text-xs tracking-widest text-muted-foreground", e),
		...t
	});
}
// src/components/context-menu.tsx
function Y({ ...e }) {
	return /* @__PURE__ */ i(s.Root, {
		"data-slot": "context-menu",
		...e
	});
}
function ae({ ...e }) {
	return /* @__PURE__ */ i(s.Trigger, {
		"data-slot": "context-menu-trigger",
		...e
	});
}
function oe({ className: e, ...t }) {
	return /* @__PURE__ */ i(s.Portal, { children: /* @__PURE__ */ i(s.Content, {
		"data-slot": "context-menu-content",
		className: x("z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", e),
		...t
	}) });
}
function se({ className: e, ...t }) {
	return /* @__PURE__ */ i(s.Item, {
		"data-slot": "context-menu-item",
		className: x("relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
		...t
	});
}
function ce({ className: e, ...t }) {
	return /* @__PURE__ */ i(s.Separator, {
		"data-slot": "context-menu-separator",
		className: x("-mx-1 my-1 h-px bg-border", e),
		...t
	});
}
function X({ className: e, ...t }) {
	return /* @__PURE__ */ i(s.Label, {
		"data-slot": "context-menu-label",
		className: x("px-2 py-1.5 text-sm font-medium", e),
		...t
	});
}
// src/components/dropdown-menu.tsx
function le({ ...e }) {
	return /* @__PURE__ */ i(l.Root, {
		"data-slot": "dropdown-menu",
		...e
	});
}
function ue({ ...e }) {
	return /* @__PURE__ */ i(l.Portal, {
		"data-slot": "dropdown-menu-portal",
		...e
	});
}
function de({ ...e }) {
	return /* @__PURE__ */ i(l.Trigger, {
		"data-slot": "dropdown-menu-trigger",
		...e
	});
}
function fe({ className: e, sideOffset: t = 4, ...n }) {
	return /* @__PURE__ */ i(l.Portal, { children: /* @__PURE__ */ i(l.Content, {
		"data-slot": "dropdown-menu-content",
		sideOffset: t,
		className: x("z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", e),
		...n
	}) });
}
function pe({ ...e }) {
	return /* @__PURE__ */ i(l.Group, {
		"data-slot": "dropdown-menu-group",
		...e
	});
}
function me({ className: e, inset: t, variant: n = "default", ...r }) {
	return /* @__PURE__ */ i(l.Item, {
		"data-slot": "dropdown-menu-item",
		"data-inset": t,
		"data-variant": n,
		className: x("relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground data-[variant=destructive]:*:[svg]:!text-destructive", e),
		...r
	});
}
function he({ className: e, children: t, checked: n, ...r }) {
	return /* @__PURE__ */ a(l.CheckboxItem, {
		"data-slot": "dropdown-menu-checkbox-item",
		className: x("relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e),
		checked: n,
		...r,
		children: [/* @__PURE__ */ i("span", {
			className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
			children: /* @__PURE__ */ i(l.ItemIndicator, { children: /* @__PURE__ */ i(h, { className: "size-4" }) })
		}), t]
	});
}
function ge({ ...e }) {
	return /* @__PURE__ */ i(l.RadioGroup, {
		"data-slot": "dropdown-menu-radio-group",
		...e
	});
}
function _e({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ a(l.RadioItem, {
		"data-slot": "dropdown-menu-radio-item",
		className: x("relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e),
		...n,
		children: [/* @__PURE__ */ i("span", {
			className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
			children: /* @__PURE__ */ i(l.ItemIndicator, { children: /* @__PURE__ */ i(v, { className: "size-2 fill-current" }) })
		}), t]
	});
}
function ve({ className: e, inset: t, ...n }) {
	return /* @__PURE__ */ i(l.Label, {
		"data-slot": "dropdown-menu-label",
		"data-inset": t,
		className: x("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e),
		...n
	});
}
function ye({ className: e, ...t }) {
	return /* @__PURE__ */ i(l.Separator, {
		"data-slot": "dropdown-menu-separator",
		className: x("-mx-1 my-1 h-px bg-border", e),
		...t
	});
}
function be({ className: e, ...t }) {
	return /* @__PURE__ */ i("span", {
		"data-slot": "dropdown-menu-shortcut",
		className: x("ml-auto text-xs tracking-widest text-muted-foreground", e),
		...t
	});
}
function xe({ ...e }) {
	return /* @__PURE__ */ i(l.Sub, {
		"data-slot": "dropdown-menu-sub",
		...e
	});
}
function Se({ className: e, inset: t, children: n, ...r }) {
	return /* @__PURE__ */ a(l.SubTrigger, {
		"data-slot": "dropdown-menu-sub-trigger",
		"data-inset": t,
		className: x("flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[inset]:pl-8 data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", e),
		...r,
		children: [n, /* @__PURE__ */ i(_, { className: "ml-auto size-4" })]
	});
}
function Ce({ className: e, ...t }) {
	return /* @__PURE__ */ i(l.SubContent, {
		"data-slot": "dropdown-menu-sub-content",
		className: x("z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", e),
		...t
	});
}
// src/components/hover-card.tsx
function we({ ...e }) {
	return /* @__PURE__ */ i(u.Root, {
		"data-slot": "hover-card",
		...e
	});
}
function Te({ ...e }) {
	return /* @__PURE__ */ i(u.Trigger, {
		"data-slot": "hover-card-trigger",
		...e
	});
}
function Ee({ className: e, align: t = "center", sideOffset: n = 4, ...r }) {
	return /* @__PURE__ */ i(u.Portal, {
		"data-slot": "hover-card-portal",
		children: /* @__PURE__ */ i(u.Content, {
			"data-slot": "hover-card-content",
			align: t,
			sideOffset: n,
			className: x("z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", e),
			...r
		})
	});
}
// src/components/input.tsx
function De({ className: e, type: t, ...n }) {
	return /* @__PURE__ */ i("input", {
		type: t,
		"data-slot": "input",
		className: x("h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-foreground/40 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:ring-destructive/40", e),
		...n
	});
}
// src/components/scroll-area.tsx
function Z({ className: e, orientation: t = "vertical", ...n }) {
	return /* @__PURE__ */ i(f.ScrollAreaScrollbar, {
		"data-slot": "scroll-area-scrollbar",
		orientation: t,
		className: x("flex touch-none p-px transition-colors select-none", t === "vertical" && "h-full w-2.5 border-l border-l-transparent", t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent", e),
		...n,
		children: /* @__PURE__ */ i(f.ScrollAreaThumb, {
			"data-slot": "scroll-area-thumb",
			className: "relative flex-1 rounded-full bg-border"
		})
	});
}
function Oe({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ a(f.Root, {
		"data-slot": "scroll-area",
		className: x("relative", e),
		...n,
		children: [
			/* @__PURE__ */ i(f.Viewport, {
				"data-slot": "scroll-area-viewport",
				className: "size-full rounded-[inherit] transition-[color,box-shadow] outline-none",
				children: t
			}),
			/* @__PURE__ */ i(Z, {}),
			/* @__PURE__ */ i(f.Corner, {})
		]
	});
}
// src/components/searchable-dropdown.tsx
function Q({ className: e, ...t }) {
	return /* @__PURE__ */ i(d.Portal, { children: /* @__PURE__ */ i(d.Content, {
		collisionPadding: 8,
		sideOffset: 8,
		className: x("z-50 w-72 max-w-[calc(100vw-1rem)] overflow-hidden rounded-xl border bg-popover text-popover-foreground shadow-lg", e),
		...t
	}) });
}
function $({ className: e, ...t }) {
	return /* @__PURE__ */ i(U, {
		className: x("max-h-[min(46vh,20rem,max(3rem,calc(var(--radix-popover-content-available-height)-3rem)))]", e),
		...t
	});
}
function ke({ label: t, value: n, options: r, onPick: o, className: s, icon: c, compact: l = !1, side: u, align: f = "start", placeholder: p = "Choose an option" }) {
	let [m, _] = e(!1), v = r.find((e) => e.value === n);
	return /* @__PURE__ */ a(d.Root, {
		open: m,
		onOpenChange: _,
		children: [/* @__PURE__ */ i(d.Trigger, {
			asChild: !0,
			children: /* @__PURE__ */ a(D, {
				type: "button",
				"aria-label": t,
				variant: l ? "ghost" : "outline",
				size: "sm",
				className: x("min-w-0 justify-start font-normal", s),
				children: [
					c,
					/* @__PURE__ */ i("span", {
						className: "min-w-0 flex-1 truncate text-left",
						children: v?.label ?? p
					}),
					!l && /* @__PURE__ */ i(g, { className: "size-3 shrink-0 text-muted-foreground" })
				]
			})
		}), /* @__PURE__ */ i(Q, {
			"aria-label": t,
			side: u,
			align: f,
			children: /* @__PURE__ */ a(B, {
				label: t,
				loop: !0,
				filter: (e, t, n) => +!!n?.join(" ").toLowerCase().includes(t.trim().toLowerCase()),
				children: [/* @__PURE__ */ i(H, {
					"aria-label": `Search ${t.toLowerCase()}`,
					placeholder: "Search…"
				}), /* @__PURE__ */ a($, {
					className: "p-1",
					children: [/* @__PURE__ */ i(W, { children: "No matches." }), r.map((e, t) => /* @__PURE__ */ a(q, {
						value: String(t),
						keywords: [e.label, e.detail ?? ""],
						disabled: e.disabled,
						className: "min-h-9 max-sm:min-h-11",
						onSelect: () => {
							o(e.value), _(!1);
						},
						children: [/* @__PURE__ */ a("span", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ i("span", {
								className: "block truncate",
								children: e.label
							}), e.detail && /* @__PURE__ */ i("span", {
								className: "block truncate text-xs text-muted-foreground",
								children: e.detail
							})]
						}), e.value === n && /* @__PURE__ */ i(h, { "aria-label": "Current selection" })]
					}, e.value))]
				})]
			})
		})]
	});
}
// src/components/skeleton.tsx
function Ae({ className: e, ...t }) {
	return /* @__PURE__ */ i("div", {
		"data-slot": "skeleton",
		className: x("animate-pulse rounded-md bg-accent", e),
		...t
	});
}
// src/components/switch.tsx
function je({ checked: e, onCheckedChange: t, disabled: n, label: r, className: a }) {
	return /* @__PURE__ */ i("button", {
		"aria-checked": e,
		"aria-label": r,
		className: x("relative inline-flex h-5 w-9 shrink-0 items-center rounded-full bg-input transition-colors outline-none disabled:opacity-50 data-[state=on]:bg-primary", a),
		"data-slot": "switch",
		"data-state": e ? "on" : "off",
		disabled: n,
		onClick: () => t(!e),
		role: "switch",
		type: "button",
		children: /* @__PURE__ */ i("span", {
			className: "pointer-events-none block size-4 translate-x-0.5 rounded-full bg-foreground/80 shadow-sm transition-transform data-[state=on]:translate-x-[18px] data-[state=on]:bg-white",
			"data-state": e ? "on" : "off"
		})
	});
}
// src/components/textarea.tsx
function Me({ className: e, ...t }) {
	return /* @__PURE__ */ i("textarea", {
		"data-slot": "textarea",
		className: x("flex field-sizing-content min-h-16 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-foreground/40 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:ring-destructive/40", e),
		...t
	});
}
// src/components/tooltip.tsx
function Ne({ delayDuration: e = 0, ...t }) {
	return /* @__PURE__ */ i(m.Provider, {
		"data-slot": "tooltip-provider",
		delayDuration: e,
		...t
	});
}
function Pe({ ...e }) {
	return /* @__PURE__ */ i(m.Root, {
		"data-slot": "tooltip",
		...e
	});
}
function Fe({ ...e }) {
	return /* @__PURE__ */ i(m.Trigger, {
		"data-slot": "tooltip-trigger",
		...e
	});
}
function Ie({ className: e, sideOffset: t = 0, children: n, ...r }) {
	return /* @__PURE__ */ i(m.Portal, { children: /* @__PURE__ */ a(m.Content, {
		"data-slot": "tooltip-content",
		sideOffset: t,
		className: x("z-50 w-fit origin-(--radix-tooltip-content-transform-origin) animate-in rounded-md bg-foreground px-3 py-1.5 text-xs text-balance text-background fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95", e),
		...r,
		children: [n, /* @__PURE__ */ i(m.Arrow, { className: "z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground" })]
	}) });
}
export { te as Alert, E as AlertDescription, T as AlertTitle, ne as Badge, D as Button, re as Collapsible, A as CollapsibleChevron, k as CollapsibleContent, O as CollapsibleTrigger, B as Command, V as CommandDialog, W as CommandEmpty, G as CommandGroup, H as CommandInput, q as CommandItem, U as CommandList, K as CommandSeparator, J as CommandShortcut, Y as ContextMenu, oe as ContextMenuContent, se as ContextMenuItem, X as ContextMenuLabel, ce as ContextMenuSeparator, ae as ContextMenuTrigger, j as Dialog, ie as DialogClose, F as DialogContent, z as DialogDescription, L as DialogFooter, I as DialogHeader, P as DialogOverlay, N as DialogPortal, R as DialogTitle, M as DialogTrigger, Q as DropdownContent, $ as DropdownList, le as DropdownMenu, he as DropdownMenuCheckboxItem, fe as DropdownMenuContent, pe as DropdownMenuGroup, me as DropdownMenuItem, ve as DropdownMenuLabel, ue as DropdownMenuPortal, ge as DropdownMenuRadioGroup, _e as DropdownMenuRadioItem, ye as DropdownMenuSeparator, be as DropdownMenuShortcut, xe as DropdownMenuSub, Ce as DropdownMenuSubContent, Se as DropdownMenuSubTrigger, de as DropdownMenuTrigger, we as HoverCard, Ee as HoverCardContent, Te as HoverCardTrigger, De as Input, Oe as ScrollArea, Z as ScrollBar, ke as SearchableDropdown, Ae as Skeleton, je as Switch, Me as Textarea, Pe as Tooltip, Ie as TooltipContent, Ne as TooltipProvider, Fe as TooltipTrigger, S as alertVariants, C as badgeVariants, w as buttonVariants, x as cn };
