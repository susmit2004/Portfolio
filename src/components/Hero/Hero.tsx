import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Database, Brain, Cpu, Code } from 'lucide-react';

const roles = [
  { text: 'MCA Aspirant', icon: Brain },
  { text: 'Database Specialist', icon: Database },
  { text: 'AI/ML Enthusiast', icon: Cpu },
  { text: 'Full-Stack Developer', icon: Code }
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo('.hero-text', 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', stagger: 0.2 }
    );

    tl.fromTo('.role-item',
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, stagger: 0.3, ease: 'back.out(1.7)' },
      '-=0.5'
    );

    tl.fromTo('.scroll-indicator',
      { y: -20, opacity: 0 },
      { y: 0, opacity: 0.7, duration: 1, ease: 'power2.out' }
    );

    gsap.to('.gradient-orb', {
      y: 30,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }, []);

  const scrollToNext = () => {
    const profileSection = document.getElementById('profile');
    if (profileSection) {
      profileSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef} 
      id="home" 
      className="min-h-screen relative flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="gradient-orb absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Grid overlay - FIXED VERSION */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h1 className="hero-text text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block mb-2">Susmit</span>
            <span className="text-gradient">Naik</span>
          </h1>
          
          <p className="hero-text text-xl md:text-2xl text-gray-300 mb-8">
            MCA Aspirant & AI/ML Specialist
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {roles.map((role, index) => {
              const Icon = role.icon;
              return (
                <div key={index} className="role-item group">
                  <div className="relative p-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                    <div className="relative bg-background-lighter/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 group-hover:border-primary/50 transition-all duration-300">
                      <Icon className="w-12 h-12 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-lg font-semibold font-mono">{role.text}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="hero-text text-lg text-gray-400 max-w-3xl mx-auto mb-12">
            A motivated MCA student with strong skills in Database Management and 
            a keen interest in Machine Learning and Artificial Intelligence. 
            Proficient in Python with hands-on experience in popular Python libraries, 
            along with solid SQL understanding.
          </p>

          <div className="flex gap-6 justify-center">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              View Projects
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToNext}
        className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2 group"
        aria-label="Scroll to next section"
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center group-hover:border-primary transition-colors">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </button>
    </section>
  );
}