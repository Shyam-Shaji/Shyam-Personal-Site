import {motion} from 'framer-motion';
import { Marquee } from "./magicui/marquee";

const groups = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Redux", "Axios", "Motion","Redux Toolkit"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "REST APIs", "JWT Auth", "Helmet", "Zod","Bcrypt","Rate Limiting", "Typescript"],
  },
  {
    title: "Database & Tools",
    items: ["MongoDB", "Mongoose", "Postgres","GitHub", "Git", "AWS","Postman","EC2", "Nginx", "Vercel", "Render", "Redis"],
  },
];

const marquee = ["MongoDB", "Express", "React", "Node.js", "TypeScript", "Tailwind", "REST APIs","GitHub", "Git", "AWS","EC2", "Postgres", "Vercel", "Redis"];

export function Skills() {
  return (
    <section id="skills" className="relative py-32 border-t border-border">
      <div className="mx-auto w-[min(92%,1100px)]">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">02 — Skills</span>
        <h2 className="mt-4 text-4xl md:text-6xl font-bold max-w-3xl">
          Tools I reach for.
        </h2>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <span className="size-1.5 rounded-full bg-primary" /> {g.title}
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="rounded-full border border-border px-3 py-1.5 text-sm bg-background/50 group-hover:bg-secondary transition-colors"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-20 relative overflow-hidden border-y border-border py-6 bg-card/40">
        <Marquee pauseOnHover className="[--duration:30s] [--gap:3rem]">
          {marquee.map((m, i) => (
            <span
              key={i}
              className="font-display text-3xl md:text-5xl font-bold text-muted-foreground/50 hover:text-primary transition-colors"
            >
              {m} <span className="text-primary">✦</span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}