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
  ConfirmDialog,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Input,
  Modal,
  MultiSelect,
  SearchableSelect,
  Skeleton,
  Switch,
  Textarea,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  type SelectOption,
} from "../index";

const APP_OPTIONS: readonly SelectOption[] = [
  { value: "portal", label: "Portal", description: "Chat + mesh", group: "Agent" },
  { value: "nanotes", label: "Nanotes", description: "Synced markdown notes", group: "Apps" },
  { value: "nanime", label: "Nanime", description: "Streaming library", group: "Apps" },
  { value: "kotoba", label: "Kotoba", description: "Japanese SRS", group: "Apps" },
];

const TAG_OPTIONS: readonly SelectOption[] = [
  { value: "web", label: "Web", group: "Targets" },
  { value: "electron", label: "Electron", description: "Desktop shell", group: "Targets" },
  { value: "android", label: "Android", description: "Kotlin WebView", group: "Targets" },
  { value: "sqlite", label: "SQLite", group: "Data" },
  { value: "tailwind", label: "Tailwind v4", group: "Frontend" },
];

function FeedbackSection() {
  return (
    <section className="space-y-3">
      <h2 className="text-sm font-medium text-muted-foreground">
        Buttons, Badges, and Feedback
      </h2>
      <div className="flex flex-wrap items-center gap-2">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Badge>Active</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
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
  );
}

export function App() {
  const [light, setLight] = useState(false);
  const [enabled, setEnabled] = useState(true);
  const [app, setApp] = useState<string | null>("portal");
  const [tags, setTags] = useState<string[]>(["web", "electron", "android"]);
  const [openDetails, setOpenDetails] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmedCount, setConfirmedCount] = useState(0);

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
              Near-black default theme and plug-and-play controls for QuillDev apps.
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
          <h2 className="text-sm font-medium text-muted-foreground">
            Selection Controls
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <SearchableSelect
              label="Target app"
              value={app}
              options={APP_OPTIONS}
              onValueChange={setApp}
              clearable
            />
            <MultiSelect
              label="Platforms and stack"
              value={tags}
              options={TAG_OPTIONS}
              onValueChange={setTags}
              showSelectAll
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <Input placeholder="Search sessions or notes..." />
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 text-sm">
                <Switch
                  checked={enabled}
                  onCheckedChange={setEnabled}
                  label="Enable notifications"
                />
                <span>Notifications {enabled ? "on" : "off"}</span>
              </label>
            </div>
          </div>
          <Textarea placeholder="Write a note..." />
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-medium text-muted-foreground">
            Modals, Confirmations, and Menus
          </h2>
          <div className="flex flex-wrap items-center gap-2">
            <Modal
              open={modalOpen}
              onOpenChange={setModalOpen}
              trigger={<Button variant="outline">Open responsive modal</Button>}
              title="Project Settings"
              description="Centered dialog on desktop, bottom sheet on mobile."
              footer={
                <>
                  <Button variant="outline" onClick={() => setModalOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setModalOpen(false)}>Save</Button>
                </>
              }
            >
              <div className="space-y-3">
                <Input defaultValue="nako-portal" />
                <MultiSelect
                  label="Targets"
                  value={tags}
                  options={TAG_OPTIONS}
                  onValueChange={setTags}
                />
              </div>
            </Modal>

            <ConfirmDialog
              trigger={<Button variant="destructive">Delete item</Button>}
              title="Delete item?"
              description="This action cannot be undone."
              confirmLabel="Delete"
              variant="destructive"
              onConfirm={() => setConfirmedCount((count) => count + 1)}
            />

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

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm">
                  Tooltip
                </Button>
              </TooltipTrigger>
              <TooltipContent>Unified near-black tooltip</TooltipContent>
            </Tooltip>

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
                Confirmed actions: {confirmedCount}
              </CollapsibleContent>
            </Collapsible>
          </div>
        </section>

        <FeedbackSection />
      </div>
    </TooltipProvider>
  );
}
