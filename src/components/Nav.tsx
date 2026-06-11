import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/theme-provider";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const { theme, setTheme } = useTheme();
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(92%,720px)]"
    >
      <nav className="flex items-center justify-between rounded-full border border-border bg-background/60 backdrop-blur-xl px-5 py-2.5">
        <a href="#top" className="font-display font-bold text-sm tracking-tight">
          ◉ dev<span className="text-primary">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-1 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle theme"
          className="size-9 grid place-items-center rounded-full border border-border hover:bg-secondary transition-colors"
        >
          {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </button>
      </nav>
    </motion.header>
  );
}