import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Cpu, Palette, Rocket } from 'lucide-react';

const items = [
  {
    icon: Sparkles,
    title: 'Crafted UI',
    desc: 'Precision-designed interfaces with a focus on clarity, hierarchy, and micro-interactions.',
  },
  {
    icon: Cpu,
    title: 'Performance First',
    desc: 'Measurable speed, accessibility, and best practices baked into every build.',
  },
  {
    icon: Palette,
    title: 'Aesthetic Motion',
    desc: 'Thoughtful animations that enhance understanding and delight without distraction.',
  },
  {
    icon: Rocket,
    title: 'Future Ready',
    desc: 'Exploring WebGL/3D, realtime UX, and modern tooling to push what’s possible.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold md:text-4xl"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 max-w-2xl text-white/70"
        >
          I’m a frontend developer who blends design thinking with engineering to craft intuitive digital products. I care about typography, rhythm, and the tiny details that make an experience feel effortless.
        </motion.p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              <item.icon className="h-6 w-6 text-white/80" />
              <h3 className="mt-3 text-lg font-medium">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
