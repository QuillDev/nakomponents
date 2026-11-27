import { useEffect, useState } from "react";
import {
  AlertCircleIcon,
  InfoIcon,
  MoonIcon,
  MoreHorizontalIcon,
  SunIcon,
} from "lucide-react";
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Input,
  SearchableDropdown,
  Skeleton,
  Switch,
  Textarea,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../index";

const MODEL_OPTIONS = [
  { value: "portal", label: "Portal", detail: "Chat + mesh" },
  { value: "nanime", label: "Nanime", detail: "Streaming library" },
  { value: "nanotes", label: "Nanotes", detail: "Synced markdown notes" },
  { value: "kotoba", label: "Kotoba", detail: "Japanese SRS" },
];

export function App() {
  const [light, setLight] = useState(false);
  const [enabled, setEnabled] = useState(true);
  const [app, setApp] = useState("portal");
  const [openDetails, setOpenDetails] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("light", light);
    root.classList.toggle("dark", !light);
  }, [light]);

  return (
    <TooltipProvider>
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col gap-10 px-6 py-10">
        <header className="flex items-center justify-between border-b pb-5">
          <div>
            <h1 className="text-xl font-semibold tracking-tight">
              nakomponents
            </h1>
            <p className="text-sm text-muted-foreground">
              Near-black default theme and Radix primitives for QuillDev apps.
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setLight((prev) => !prev)}
          >
            {light ? <MoonIcon /> : <SunIcon />}
            {light ? "Dark" : "Light"}
          </Button>
        </header>

        <section className="space-y-3">
          <h2 className="text-sm font-medium text-muted-foreground">Buttons</h2>
          <div className="flex flex-wrap items-center gap-2">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
            <Button size="sm">Small</Button>
            <Button size="xs">XS</Button>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-medium text-muted-foreground">Badges</h2>
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Active</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Error</Badge>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-medium text-muted-foreground">
            Inputs and Controls
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Input placeholder="Search sessions or notes..." />
            <SearchableDropdown
              label="Target app"
              value={app}
              options={MODEL_OPTIONS}
              onPick={setApp}
            />
          </div>
          <Textarea placeholder="Write a note..." />
          <div className="flex items-center gap-4 pt-1">
            <label className="flex items-center gap-2 text-sm">
              <Switch
                checked={enabled}
                onCheckedChange={setEnabled}
                label="Enable notifications"
              />
              <span>Notifications {enabled ? "on" : "off"}</span>
            </label>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm">
                  Hover tooltip
                </Button>
              </TooltipTrigger>
              <TooltipContent>Unified near-black tooltip</TooltipContent>
            </Tooltip>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-medium text-muted-foreground">
            Overlays and Disclosure
          </h2>
          <div className="flex flex-wrap items-center gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Open dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Unified Dialog</DialogTitle>
                  <DialogDescription>
                    Shared modal styling across portal, nanime, nanotes, and
                    kotoba.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter showCloseButton>
                  <Button>Confirm</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon-sm" aria-label="Menu">
                  <MoreHorizontalIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>Rename</DropdownMenuItem>
                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Collapsible open={openDetails} onOpenChange={setOpenDetails}>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm">
                  <span>Details</span>
                  <CollapsibleChevron
                    className={openDetails ? "rotate-180" : undefined}
                  />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-2 text-sm text-muted-foreground">
                Collapsible body content rendered with shared primitives.
              </CollapsibleContent>
            </Collapsible>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-medium text-muted-foreground">
            Feedback and Loading
          </h2>
          <div className="grid gap-3">
            <Alert>
              <InfoIcon />
              <AlertTitle>Unified palette</AlertTitle>
              <AlertDescription>
                Default surface is #09090b with #db2777 primary actions.
              </AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertCircleIcon />
              <AlertTitle>Connection lost</AlertTitle>
              <AlertDescription>
                Retrying sync automatically in the background.
              </AlertDescription>
            </Alert>
            <div className="flex items-center gap-3 pt-1">
              <Skeleton className="size-9 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-3.5 w-48" />
                <Skeleton className="h-3 w-32" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </TooltipProvider>
  );
}
