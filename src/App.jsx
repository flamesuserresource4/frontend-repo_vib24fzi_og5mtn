import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="border-t border-white/10 bg-black/90 py-10 text-center text-white/60">
        <div className="mx-auto max-w-6xl px-6">
          <p>
            © {new Date().getFullYear()} Your Name — Built with love, motion, and a dash of 3D.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
