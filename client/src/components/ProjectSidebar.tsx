import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export interface Section {
  id: string;
  number: string;
  title: string;
}

interface ProjectSidebarProps {
  sections: Section[];
}

export function ProjectSidebar({ sections }: ProjectSidebarProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observers = new Map();
    
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: "-20% 0px -60% 0px", // triggers when section is in top half of screen
    });

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) {
        observer.observe(el);
        observers.set(section.id, el);
      }
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80; // offset for navbar
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="fixed left-4 bottom-6 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-50 flex flex-col-reverse md:flex-col items-start gap-3 md:gap-0">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-10 w-12 h-12 md:w-10 md:h-10 rounded-full bg-background border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all shadow-[0_0_15px_rgba(6,182,212,0.15)] group"
        aria-label="Toggle Navigation"
      >
        {isOpen ? <X size={24} className="md:w-5 md:h-5" /> : <Menu size={24} className="md:w-5 md:h-5" />}
      </button>

      {/* Menu Options */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: 20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden md:ml-2 bg-background/90 md:bg-background/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-[0_0_20px_rgba(6,182,212,0.05)] py-3 pl-3 pr-4 min-w-[200px] mb-2 md:mb-0"
          >
            <ul className="space-y-3 relative">
              {/* Connecting line */}
              <div className="absolute left-[7px] top-3 bottom-3 w-[1px] bg-cyan-900/40" />

              {sections.map((section) => {
                const isActive = activeSection === section.id;
                
                return (
                  <li key={section.id} className="relative z-10">
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className="flex items-center gap-4 text-left group w-full"
                    >
                      {/* Circle Indicator */}
                      <div className="relative flex items-center justify-center w-4 h-4 shrink-0">
                        <div 
                          className={`absolute w-3 h-3 rounded-full transition-all duration-300 ${
                            isActive 
                              ? "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" 
                              : "bg-background border border-cyan-700 group-hover:border-cyan-400"
                          }`}
                        />
                      </div>
                      
                      {/* Text */}
                      <div className="flex flex-col">
                        <span className={`text-xs font-mono transition-colors ${
                          isActive ? "text-cyan-400" : "text-cyan-600/70 group-hover:text-cyan-400"
                        }`}>
                          {section.number}
                        </span>
                        <span className={`text-xs transition-colors max-w-[110px] leading-tight ${
                          isActive ? "text-white font-medium" : "text-foreground/60 group-hover:text-foreground/90"
                        }`}>
                          {section.title}
                        </span>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
