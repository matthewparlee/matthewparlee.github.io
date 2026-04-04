import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Contact", path: "/contact" },
];

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur-md" role="banner">
      <nav className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-4" aria-label="Main navigation">
        <Link to="/" className="font-serif text-xl font-bold tracking-tight text-foreground" aria-label="Home">
          <span className="font-sans text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Matthew Parlee</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-8 md:flex" role="list">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === item.path || location.pathname.startsWith(item.path + "/") ? "text-primary" : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle dark mode"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </li>
        </ul>

        {/* Theme toggle (desktop) */}
        <div className="hidden md:hidden" />

        {/* Mobile controls */}
        <div className="flex items-center gap-1 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle dark mode"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t bg-background px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4" role="list">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block text-sm font-medium transition-colors hover:text-primary",
                    location.pathname === item.path || location.pathname.startsWith(item.path + "/") ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navigation;
