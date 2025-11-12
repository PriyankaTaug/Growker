'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, useCallback, useRef } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/services#blog", label: "Blog" },
  { href: "/#works", label: "Works" },
  { href: "/stories", label: "Stories" },
  { href: "/contact", label: "Let's Talk" },
  { href: "/careers", label: "Careers" },
];

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const ticking = useRef(false);
  const router = useRouter();

  // Optimized scroll handler with requestAnimationFrame and throttling
  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 40);
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, []);

  useEffect(() => {
    // Initial check
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const headerStyles = isScrolled
    ? "bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-neutral-200 shadow-sm"
    : "bg-transparent";

  const brandStyles = isScrolled ? "text-neutral-900" : "text-white";
  const navStyles = isScrolled ? "text-neutral-600" : "text-white/70";
  const navHover = isScrolled ? "hover:text-neutral-900" : "hover:text-white";
  const mobileButtonStyles = isScrolled
    ? "border-neutral-300 text-neutral-500"
    : "border-white/20 text-white/80";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle smooth scroll for anchor links
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      const hash = href.split('#')[1];
      const isOnHomePage = window.location.pathname === '/';
      
      if (!isOnHomePage) {
        // Navigate to home page with hash, browser will handle scroll
        e.preventDefault();
        router.push(href);
        return;
      }
      
      // If already on home page, scroll to section
      e.preventDefault();
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 10);
    }
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${headerStyles}`}
      >
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            onClick={closeMobileMenu}
            className={`text-2xl font-semibold tracking-[0.08em] lowercase transition-colors duration-300 ${brandStyles}`}
            style={{ fontFamily: "var(--font-logo)" }}
          >
            growcker
          </Link>
          <nav
            className={`hidden md:flex gap-8 text-sm transition-colors duration-300 ${navStyles}`}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`transition-colors duration-200 ${navHover}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <button
            onClick={toggleMobileMenu}
            aria-label="Menu"
            className={`md:hidden inline-flex h-10 w-10 items-center justify-center rounded border transition-colors duration-300 ${mobileButtonStyles} hover:bg-white/10`}
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
            onClick={closeMobileMenu}
          />

          {/* Sidebar */}
          <div
            className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white/95 backdrop-blur-xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } shadow-2xl`}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-neutral-200">
                <Link
                  href="/"
                  onClick={closeMobileMenu}
                  className="text-2xl font-semibold tracking-[0.08em] lowercase text-neutral-900"
                  style={{ fontFamily: "var(--font-logo)" }}
                >
                  growcker
                </Link>
                <button
                  onClick={closeMobileMenu}
                  aria-label="Close menu"
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-neutral-600 hover:bg-neutral-100 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 overflow-y-auto p-6">
                <ul className="space-y-2">
                  {links.map((link, index) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={(e) => {
                          handleLinkClick(e, link.href);
                          closeMobileMenu();
                        }}
                        className="block px-4 py-3 rounded-xl text-neutral-900 font-medium hover:bg-[#ff0000] hover:text-white transition-all duration-200 group"
                        style={{
                          animationDelay: `${index * 50}ms`,
                        }}
                      >
                        <span className="flex items-center justify-between">
                          {link.label}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                          </svg>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Footer CTA */}
              <div className="p-6 border-t border-neutral-200">
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="block w-full px-6 py-3 text-center text-sm font-semibold text-white rounded-xl transition-all hover:opacity-90 hover:shadow-lg"
                  style={{ backgroundColor: '#ff0000' }}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
