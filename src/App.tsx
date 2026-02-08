import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './components/Hero/Hero';
import Profile from './components/Profile/Profile';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Navbar from './components/shared/Navbar';
import ParticleBackground from './components/shared/ParticleBackground';
import './styles/globals.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    gsap.config({
      force3D: true
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-white overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <Profile />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 border-t border-gray-800 text-center text-gray-400">
        <p className="font-mono text-sm">
          MCA Aspirant | AI & ML Enthusiast • © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default App;