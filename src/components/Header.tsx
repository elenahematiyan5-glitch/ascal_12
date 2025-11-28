import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'projects', 'team', 'services', 'order', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'home', label: 'خانه' },
    { id: 'projects', label: 'پروژه‌ها' },
    { id: 'team', label: 'تیم ما' },
    { id: 'services', label: 'خدمات' },
    { id: 'order', label: 'ثبت سفارش' },
    { id: 'contact', label: 'تماس' },
  ];

  return (
    <header className={cn(
      "fixed w-full top-0 z-50 transition-all duration-300 border-b border-transparent",
      isScrolled ? "bg-[#0a0a0a]/95 backdrop-blur-md py-4 border-primary/10" : "bg-transparent py-6"
    )}>
      <nav className="max-w-[1400px] mx-auto px-8 flex justify-between items-center">
        <div className="text-3xl font-bold bg-gradient-to-br from-[#00bfff] to-[#0080ff] bg-clip-text text-transparent cursor-pointer" onClick={() => scrollToSection('home')}>
          ASCAI
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 list-none">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className={cn(
                  "text-white font-medium transition-colors duration-300 relative hover:text-primary",
                  activeSection === link.id && "text-primary after:content-[''] after:absolute after:-bottom-1 after:right-0 after:w-full after:h-0.5 after:bg-primary"
                )}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <div className={cn(
          "absolute top-full left-0 right-0 bg-[#0a0a0a]/98 border-t border-primary/10 p-8 flex flex-col gap-6 md:hidden transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={cn(
                "text-white font-medium text-right transition-colors duration-300 hover:text-primary",
                activeSection === link.id && "text-primary"
              )}
            >
              {link.label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};
