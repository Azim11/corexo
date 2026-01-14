import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { data } from "../data/data";
import { X, Menu, ArrowRight, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-12">
          <div
            className={`
            relative flex items-center justify-between px-8 py-4
            transition-all duration-500
            ${
              scrolled
                ? "bg-[var(--color-card)]/70 backdrop-blur-glass shadow-2xl border border-[var(--color-border)]/50"
                : "bg-[var(--color-card)]/40 backdrop-blur-md border border-[var(--color-border)]/30"
            }
            rounded-[var(--radius)] overflow-hidden
          `}
          >
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/5 via-transparent to-[var(--color-accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Logo */}
            <Link
              to="/"
              className="relative z-10 flex items-center gap-3 group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[var(--color-primary)] blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                <img
                  src="logo.png"
                  alt="Logo"
                  className="relative h-14 w-auto object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 relative z-10">
              {data.navigation.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`
                      relative px-5 py-2.5 text-sm font-semibold tracking-wide
                      transition-all duration-300 rounded-lg
                      ${
                        isActive
                          ? "text-[var(--color-primary)]"
                          : "text-[var(--color-foreground)] hover:text-[var(--color-primary)]"
                      }
                      before:absolute before:inset-0 before:bg-[var(--color-secondary)]
                      before:rounded-lg before:scale-0 before:transition-transform
                      before:duration-300 hover:before:scale-100
                    `}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[var(--color-primary)] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4 relative z-10">
              <Link
                to="/contact-us"
                className="group relative inline-flex items-center gap-2 px-7 py-3 text-sm font-bold text-[var(--color-primary-foreground)] bg-[var(--color-primary)] rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[var(--color-primary)]/30 hover:scale-105"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Sparkles
                  size={16}
                  className="relative z-10 transition-transform duration-300 group-hover:rotate-180"
                />
                <span className="relative z-10">Get Started</span>
                <ArrowRight
                  size={16}
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-10 p-3 text-[var(--color-foreground)] bg-[var(--color-secondary)]/50 hover:bg-[var(--color-secondary)] rounded-xl transition-all duration-300 hover:scale-105"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute top-1/2 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                  }`}
                />
                <span
                  className={`absolute top-1/2 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute top-1/2 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 z-40 lg:hidden
          transition-all duration-700 ease-out
          ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[var(--color-background)]/95 backdrop-blur-2xl"
          onClick={() => setIsOpen(false)}
        />

        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[var(--color-primary)]/10 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-20 right-10 w-80 h-80 bg-[var(--color-accent)]/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        />

        {/* Menu Content */}
        <div className="relative h-full flex flex-col items-center justify-center p-8">
          <div className="space-y-2 w-full max-w-sm">
            {data.navigation.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`
                    block px-8 py-5 text-2xl font-bold text-center
                    transition-all duration-300 rounded-2xl
                    ${
                      isActive
                        ? "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow-xl shadow-[var(--color-primary)]/20"
                        : "text-[var(--color-foreground)] hover:bg-[var(--color-secondary)] hover:translate-x-2"
                    }
                  `}
                  style={{
                    transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? "translateY(0)" : "translateY(-20px)",
                  }}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <Link
            to="/contact-us"
            onClick={() => setIsOpen(false)}
            className="mt-12 px-12 py-5 text-lg font-bold text-[var(--color-primary-foreground)] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full w-full max-w-sm text-center shadow-2xl shadow-[var(--color-primary)]/30 hover:scale-105 transition-all duration-300"
            style={{
              transitionDelay: isOpen
                ? `${data.navigation.length * 50}ms`
                : "0ms",
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? "translateY(0)" : "translateY(-20px)",
            }}
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </>
  );
}
