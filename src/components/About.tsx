import {motion} from 'framer-motion'

const stats = [
  { v: "10+", l: "Projects built" },
  { v: "MERN", l: "Specialization" },
  { v: "100%", l: "Self-taught" },
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto w-[min(92%,1100px)]">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-primary"
        >
          01 — About
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-4 text-4xl md:text-6xl font-bold max-w-3xl leading-tight"
        >
          A developer who cares about <span className="text-gradient">craft</span> as much as code.
        </motion.h2>

        <div className="mt-12 grid md:grid-cols-2 gap-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            I build full-stack web applications using the MERN stack — MongoDB,
            Express.js, React, and Node.js. I love turning ideas into polished
            products with clean architecture, thoughtful UI, and code that's
            built to last.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Outside of shipping features, I spend my time exploring new tools,
            contributing to side projects, and refining my eye for design. I
            believe great software is built at the intersection of engineering
            and taste.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-5 md:p-8"
            >
              <div className="font-display text-3xl md:text-5xl font-bold text-gradient">{s.v}</div>
              <div className="mt-2 text-xs md:text-sm text-muted-foreground uppercase tracking-wider">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}