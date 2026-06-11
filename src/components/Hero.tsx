import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import {FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa";
import profileAsset from "../assets/Hero-pic.jpeg";
import resume from '../../public/Shyam_Shaji_Resume.pdf';

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute top-1/3 -left-32 size-[420px] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -right-32 size-[420px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto w-[min(92%,1200px)] grid md:grid-cols-[1.4fr_1fr] gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur px-3 py-1 text-xs text-muted-foreground mb-6"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Available for new projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.95]"
          >
            Hi, I'm <span className="text-gradient">Shyam</span>
            <br />
            building clean
            <br />
            <span className="font-mono text-primary">MERN</span> web apps.
          </motion.h1>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Shyam Shaji — Full-Stack Developer
          </p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground"
          >
            I'm a full-stack developer crafting modern interfaces and reliable
            backends with MongoDB, Express, React, and Node.js — focused on
            details, performance, and clean code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium hover:opacity-90 transition"
            >
              View my work <ArrowDown className="size-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium hover:bg-secondary transition"
            >
              Get in touch
            </a>
            <a
              href={resume}
              download='Shyam_Shaji_Resume'
              className="inline-flex items-center gap-2 rounded-full border border-primary/60 bg-primary/10 text-primary px-5 py-3 text-sm font-medium hover:bg-primary/20 transition"
            >
              <Download className="size-4" />
              Resume
            </a>
            <div className="ml-2 flex items-center gap-1">
              {[
                { Icon: FaGithub, href: "https://github.com/Shyam-Shaji" },
                { Icon: FaLinkedin, href: "https://www.linkedin.com/in/shyam-shaji/" },
                { Icon: FaInstagram, href: "https://www.instagram.com/shyameee___/" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="size-10 grid place-items-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:bg-secondary transition"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative justify-self-center md:justify-self-end"
        >
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-linear-to-br from-primary/60 to-primary/0 blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden glow-ring rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src={profileAsset}
                alt="Portrait of the developer"
                className="w-[260px] h-[532px] sm:w-[320px] aspect-3/4 object-cover grayscale hover:grayscale-0 transition duration-700"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-2xl border border-border bg-background/80 backdrop-blur px-3 py-2 font-mono text-xs">
              <span className="text-primary">$</span> npm run build
            </div>
            <div className="absolute -top-4 -right-4 rounded-2xl border border-border bg-background/80 backdrop-blur px-3 py-2 text-xs">
              ⚡ <span className="text-muted-foreground">shipping</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}