import { motion } from 'framer-motion'
import { RadioTower } from 'lucide-react'
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "Finance Tracker",
    tag: "Finance",
    desc: "A finance tracking application that allows users to track their income and expenses.",
    stack: ["React", "Tailwind CSS", "Shadcn UI", "TypeScript", "Axios", "Node.js", "Express", "MongoDB"],
    accent: "from-emerald-400/30 to-cyan-400/10",
    git: "",
    live: "",
  },
  {
    title: "WatchHub",
    tag: "E-commerce",
    desc: "Full-featured e-commerce platform with Razorpay checkout, admin dashboard, and order management.",
    stack: ["EJS", "Node.js", "Express", "MongoDB", "Bootstrap", "Razorpay"],
    accent: "from-fuchsia-400/30 to-rose-400/10",
    git: "https://github.com/Shyam-Shaji/WatchHub",
    live: "",
  },
  {
    title: "Weather App",
    tag: "Productivity",
    desc: "A weather application that provides real-time weather information for any location.",
    stack: ["React", "Tailwind CSS", "Shadcn UI", "TypeScript", "TanStack Query", "OpenWeather API"],
    accent: "from-amber-400/30 to-orange-400/10",
    git: "https://github.com/Shyam-Shaji/weather-app",
    live: "https://weather-app-2r7w.onrender.com/",
  },
  {
    title: "Recipe App",
    tag: "Food App",
    desc: "A recipe application that allows users to search for recipes and view detailed information about each recipe.",
    stack: ["React", "Tailwind CSS", "DaisyUI", "Axios", "TheMealDB API"],
    accent: "from-sky-400/30 to-indigo-400/10",
    git: "https://github.com/Shyam-Shaji/Recipe-App",
    live: "",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32 border-t border-border">
      <div className="mx-auto w-[min(92%,1200px)]">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">03 — Projects</span>
            <h2 className="mt-4 text-4xl md:text-6xl font-bold">Selected work.</h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            A few projects I've built while sharpening my craft as a MERN developer.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 md:p-8 hover:border-primary/60 transition-all"
            >
              <div
                className={`absolute inset-0 bg-linear-to-br ${p.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div className="relative flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                      {p.tag}
                    </div>
                    <h3 className="mt-2 text-2xl md:text-3xl font-bold">{p.title}</h3>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-muted-foreground max-w-md">{p.desc}</p>

                {/* Stack Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-mono px-2 py-1 rounded-md bg-background/60 border border-border"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-6 flex items-center gap-3">
                  {p.git ? (
                    <a
                      href={p.git}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl border border-border bg-background/60 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
                    >
                      <FaGithub className="size-4" />
                      GitHub
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl border border-border/40 bg-background/30 text-muted-foreground/50 cursor-not-allowed select-none">
                      <FaGithub className="size-4" />
                      GitHub
                    </span>
                  )}

                  {p.live ? (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl border border-border bg-background/60 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
                    >
                      <RadioTower className="size-4" />
                      Live
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl border border-border/40 bg-background/30 text-muted-foreground/50 cursor-not-allowed select-none">
                      <RadioTower className="size-4" />
                      Live
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}