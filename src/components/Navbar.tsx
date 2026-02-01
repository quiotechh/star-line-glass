"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Products",
    href: "/products",
    dropdown: [
      { name: "Annealed Glass", href: "/products/annealed-glass" },
      { name: "Toughened Glass", href: "/products/toughened-glass" },
      { name: "Fluted Glass", href: "/products/fluted-glass" },
      { name: "Insulated Glasses", href: "/products/insulated-glasses" },
      { name: "Laminate Safety Glass", href: "/products/laminate-safety-glass" },
      { name: "Heat Soaked Glass", href: "/products/heat-soaked-glass" },
    ],
  },
  { name: "Projects", href: "/projects" },
  { name: "Contact Us", href: "/contact" },
];

const WHATSAPP_NUMBER = "9198110 31849"; // Replace with actual number
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi, I'd like to inquire about your glass products"
);

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu helper
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileProductsOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg"
          : "bg-white/95 backdrop-blur-sm shadow-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Mobile: Hamburger Menu */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-brand-primary transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-brand-primary mt-1.5 transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-brand-primary mt-1.5 transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center lg:flex-none flex-1 justify-center lg:justify-start"
          >
            <Image
              src="/logo/star-line-logo.png"
              alt="Star Line Glass Logo"
              width={150}
              height={50}
              className="h-12 w-auto object-contain scale-135 scale-x-145"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <li key={link.name} className="relative">
                  {link.dropdown ? (
                    <div className="relative" ref={dropdownRef}>
                      <button
                        className={`flex items-center gap-1 text-base font-medium transition-colors duration-200 py-2 ${
                          isActiveLink(link.href)
                            ? "text-brand-primary"
                            : "text-gray-700 hover:text-brand-primary"
                        }`}
                        onClick={() => setIsProductsOpen(!isProductsOpen)}
                        onMouseEnter={() => setIsProductsOpen(true)}
                        aria-expanded={isProductsOpen}
                        aria-haspopup="true"
                      >
                        {link.name}
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isProductsOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {/* Desktop Dropdown */}
                      <div
                        className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden transition-all duration-200 origin-top ${
                          isProductsOpen
                            ? "opacity-100 scale-100 visible"
                            : "opacity-0 scale-95 invisible"
                        }`}
                        onMouseLeave={() => setIsProductsOpen(false)}
                      >
                        <ul className="py-2">
                          {link.dropdown.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className={`block px-4 py-3 text-sm transition-colors duration-150 ${
                                  isActiveLink(item.href)
                                    ? "bg-brand-primary/10 text-brand-primary font-medium"
                                    : "text-gray-700 hover:bg-gray-50 hover:text-brand-primary"
                                }`}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={`text-base font-medium transition-colors duration-200 py-2 relative group ${
                        isActiveLink(link.href)
                          ? "text-brand-primary"
                          : "text-gray-700 hover:text-brand-primary"
                      }`}
                    >
                      {link.name}
                      <span
                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-brand-primary transform transition-transform duration-200 origin-left ${
                          isActiveLink(link.href)
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Enquiry Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold px-4 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg text-sm sm:text-base"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="hidden sm:inline">Enquiry</span>
          </a>
        </div>
      </nav>
    </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-40"
          onClick={() => setIsMobileMenuOpen(false)}
          style={{ top: "80px" }}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-20 left-0 bottom-0 w-80 max-w-[85vw] bg-white lg:hidden transition-transform duration-300 ease-out shadow-xl overflow-y-auto z-50 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="py-4">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.dropdown ? (
                  <div>
                    <button
                      className={`w-full flex items-center justify-between px-6 py-4 text-left text-base font-medium transition-colors ${
                        isActiveLink(link.href)
                          ? "text-brand-primary bg-brand-primary/5"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                      onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                      aria-expanded={isMobileProductsOpen}
                    >
                      {link.name}
                      <svg
                        className={`w-5 h-5 transition-transform duration-200 ${
                          isMobileProductsOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Mobile Dropdown */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isMobileProductsOpen ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      <ul className="bg-gray-50 py-2">
                        {link.dropdown.map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              onClick={closeMobileMenu}
                              className={`block px-8 py-3 text-sm transition-colors ${
                                isActiveLink(item.href)
                                  ? "text-brand-primary font-medium"
                                  : "text-gray-600 hover:text-brand-primary"
                              }`}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={`block px-6 py-4 text-base font-medium transition-colors ${
                      isActiveLink(link.href)
                        ? "text-brand-primary bg-brand-primary/5 border-l-4 border-brand-primary"
                        : "text-gray-700 hover:bg-gray-50 border-l-4 border-transparent"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile WhatsApp CTA */}
          <div className="px-6 pt-6 mt-4 border-t border-gray-100">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold px-4 py-3 rounded-lg transition-all duration-200"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat with us on WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}