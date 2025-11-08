import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Immersive Portfolio',
    desc: 'A 3D-enhanced personal site with WebGL interactions and smooth motion.',
    tags: ['React', 'Spline', 'Framer Motion'],
    link: '#',
  },
  {
    title: 'Design System Starter',
    desc: 'Token-driven, accessible component library with theming and docs.',
    tags: ['TypeScript', 'Radix UI', 'Tailwind'],
    link: '#',
  },
  {
    title: 'Realtime Dashboard',
    desc: 'Live metrics, streaming charts, and collaborative features.',
    tags: ['WebSockets', 'Charts', 'Vite'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-gradient-to-b from-black to-zinc-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold md:text-4xl"
        >
          Selected Work
        </motion.h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              target={p.link.startsWith('http') ? '_blank' : undefined}
              rel={p.link.startsWith('http') ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-medium">{p.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{p.desc}</p>
                </div>
                <ExternalLink className="h-4 w-4 shrink-0 text-white/60 transition group-hover:text-white" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
