import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, Mail, Home } from 'lucide-react';

export default function Navbar() {
  const links = [
    { href: '#home', label: 'Home', icon: Home },
    { href: '#about', label: 'About', icon: User },
    { href: '#projects', label: 'Projects', icon: Code2 },
    { href: '#contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur"
        >
          <a href="#home" className="text-sm font-semibold tracking-wide text-white/90">
            <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">YourName</span>
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {links.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                className="group inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium text-white/80 transition hover:bg-white/10"
              >
                <Icon className="h-4 w-4 text-white/70 transition group-hover:text-white" />
                {label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-white px-3 py-2 text-xs font-semibold text-black transition hover:bg-white/90"
          >
            Hire Me
          </a>
        </motion.nav>
      </div>
    </div>
  );
}
