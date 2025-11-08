import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Github, Mail } from 'lucide-react';

const MotionH1 = motion.h1;
const MotionP = motion.p;
const MotionDiv = motion.div;

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute -inset-x-32 -top-20 h-72 rounded-b-[100%] bg-gradient-to-b from-indigo-600/20 blur-3xl" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          <span className="text-xs tracking-wide text-white/80">Available for new opportunities</span>
        </MotionDiv>

        <MotionH1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: 'easeOut' }}
          className="text-balance bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-5xl font-semibold leading-tight text-transparent md:text-6xl"
        >
          Hi, I’m Your Name
          <br className="hidden md:block" />
          Building delightful digital experiences
        </MotionH1>

        <MotionP
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-4 max-w-2xl text-pretty text-base text-white/70 md:text-lg"
        >
          Frontend engineer and creative coder focusing on performant, accessible interfaces with a touch of motion and 3D.
        </MotionP>

        <MotionDiv
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Let’s work together
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="mailto:you@example.com"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            <Mail className="h-4 w-4" /> Email me
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
        </MotionDiv>
      </div>
    </section>
  );
}
