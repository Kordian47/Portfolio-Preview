import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Goals", href: "/#goals" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("/#")) {
      if (location !== "/") {
        window.location.href = href;
      } else {
        const id = href.replace("/#", "");
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <span className="font-display font-medium text-foreground hover:text-primary transition-colors cursor-pointer tracking-wide" data-testid="link-home">
              Kordian.
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              item.href === "/projects" ? (
                <Link key={item.label} href={item.href}>
                  <span
                    className="text-[15px] text-muted-foreground hover:text-foreground transition-colors cursor-pointer font-medium"
                    data-testid={`link-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </span>
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-[15px] text-muted-foreground hover:text-foreground transition-colors font-medium"
                  data-testid={`link-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </button>
              )
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
              data-testid="button-resume"
            >
              <FileText size={16} />
              Resume
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
            data-testid="button-mobile-menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 flex flex-col gap-4"
          >
            {navItems.map((item) => (
              item.href === "/projects" ? (
                <Link key={item.label} href={item.href}>
                  <span
                    onClick={() => setIsOpen(false)}
                    className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                    data-testid={`link-mobile-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </span>
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left text-muted-foreground hover:text-foreground transition-colors"
                  data-testid={`link-mobile-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </button>
              )
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium w-fit"
              data-testid="button-mobile-resume"
            >
              <FileText size={16} />
              Resume
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}