import { useState, useEffect } from "react";
import { Link } from "wouter";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-background ${scrolled ? "bg-opacity-80" : "bg-opacity-50"} backdrop-blur-md border-b border-primary/20 transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="font-orbitron text-primary animate-glow text-xl md:text-2xl font-bold">
              SERVET ASANI
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#home"
                className="font-space hover:text-primary px-3 py-2 text-sm md:text-base transition-colors duration-300"
              >
                &lt;Home/&gt;
              </a>
              <a
                href="#skills"
                className="font-space hover:text-primary px-3 py-2 text-sm md:text-base transition-colors duration-300"
              >
                &lt;Skills/&gt;
              </a>
              <a
                href="#projects"
                className="font-space hover:text-primary px-3 py-2 text-sm md:text-base transition-colors duration-300"
              >
                &lt;Projects/&gt;
              </a>
              <a
                href="#experience"
                className="font-space hover:text-primary px-3 py-2 text-sm md:text-base transition-colors duration-300"
              >
                &lt;Experience/&gt;
              </a>
              <a
                href="#contact"
                className="font-space hover:text-primary px-3 py-2 text-sm md:text-base transition-colors duration-300"
              >
                &lt;Contact/&gt;
              </a>
            </div>
          </div>
          <div className="block md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-white hover:bg-background focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${mobileMenuOpen ? "block" : "hidden"} md:hidden bg-card bg-opacity-95 border-b border-primary/20`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#home"
            onClick={closeMobileMenu}
            className="block font-space hover:text-primary px-3 py-2 text-base transition-colors duration-300"
          >
            &lt;Home/&gt;
          </a>
          <a
            href="#skills"
            onClick={closeMobileMenu}
            className="block font-space hover:text-primary px-3 py-2 text-base transition-colors duration-300"
          >
            &lt;Skills/&gt;
          </a>
          <a
            href="#projects"
            onClick={closeMobileMenu}
            className="block font-space hover:text-primary px-3 py-2 text-base transition-colors duration-300"
          >
            &lt;Projects/&gt;
          </a>
          <a
            href="#experience"
            onClick={closeMobileMenu}
            className="block font-space hover:text-primary px-3 py-2 text-base transition-colors duration-300"
          >
            &lt;Experience/&gt;
          </a>
          <a
            href="#contact"
            onClick={closeMobileMenu}
            className="block font-space hover:text-primary px-3 py-2 text-base transition-colors duration-300"
          >
            &lt;Contact/&gt;
          </a>
        </div>
      </div>
    </nav>
  );
}
