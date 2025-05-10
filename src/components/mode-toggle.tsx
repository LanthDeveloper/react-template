import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      aria-label="Toggle theme"
      type="button"
      variant="ghost"
      size="icon"
      className="cursor-pointer"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <SunIcon className="size-4 dark:hidden dark:text-neutral-200" />
      <MoonIcon className="size-4 hidden dark:block dark:text-neutral-200" />
    </Button>
  );
}
