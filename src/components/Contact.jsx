import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name');
    setStatus(`Thanks, ${name}! I will get back to you shortly.`);
    form.reset();
  }

  return (
    <section id="contact" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-3xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold md:text-4xl"
        >
          Let’s connect
        </motion.h2>
        <p className="mt-4 text-center text-white/70">
          Have a project in mind or want to say hi? Drop a message.
        </p>

        <form onSubmit={onSubmit} className="mx-auto mt-10 space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm text-white/70">Name</label>
              <input
                name="name"
                required
                className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none transition placeholder:text-white/40 focus:border-white/30"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none transition placeholder:text-white/40 focus:border-white/30"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm text-white/70">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none transition placeholder:text-white/40 focus:border-white/30"
              placeholder="Tell me about your idea..."
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 text-white/60">
              <Mail className="h-4 w-4" /> you@example.com
            </div>
            <motion.button
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-white/90"
              type="submit"
            >
              Send message
              <Send className="h-4 w-4" />
            </motion.button>
          </div>
          {status && (
            <p className="pt-2 text-center text-emerald-400">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}
