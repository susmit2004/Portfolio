import { useState, useEffect } from 'react';
import { Menu, X, Brain } from 'lucide-react';
import { gsap } from 'gsap';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Profile', href: '#profile' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    gsap.from('.navbar', {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/90 backdrop-blur-lg py-4 border-b border-gray-800' : 'py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#home" 
            className="flex items-center space-x-2 group"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
          >
            <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-lg">
              <Brain className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold font-mono">
              Susmit<span className="text-primary">Naik</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="relative font-medium text-gray-300 hover:text-primary transition-colors duration-300 group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a 
              href="#contact" 
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
            >
              Hire Me
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-background-lighter rounded-xl border border-gray-800 p-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="py-2 px-4 rounded-lg hover:bg-gray-800 hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="#contact" 
                className="btn-primary w-full mt-2 text-center"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}