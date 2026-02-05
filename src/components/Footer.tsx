import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact Us", href: "/contact" },
];

const productLinks = [
  { name: "Annealed Glass", href: "/products/annealed-glass" },
  { name: "Toughened Glass", href: "/products/toughened-glass" },
  { name: "Fluted Glass", href: "/products/fluted-glass" },
  { name: "Insulated Glasses", href: "/products/insulated-glasses" },
  { name: "Laminate Safety Glass", href: "/products/laminate-safety-glass" },
  { name: "Heat Soaked Glass", href: "/products/heat-soaked-glass" },
  { name: "Fabric Glass", href: "/products/fabric-glass" },
  { name: "Bulletproof Glass", href: "/products/bulletproof-glass" },
  { name: "Patterned Glass", href: "/products/patterned-glass" },
  { name: "Reflective and Tinted Glass", href: "/products/reflective-tinted-glass" },
];

const branches = [
  {
    name: "Delhi (Unit-1)",
    address: "J18, Udyog Nagar, Mangolpuri, New Delhi, Delhi, 110041",
    mapLink:
      "https://www.google.com/search?sca_esv=2d75fd89a7b477b4&authuser=1&sxsrf=ANbL-n7C0hrM33Fz8PTnRxbAFpRdZM5fzw:1769595054586&kgmid=/g/11wfl5_lry&q=STAR+GLASS+INDUSTRIES&shem=bdsle,ptotple,shrtsdl&shndl=30&source=sh/x/loc/uni/m1/1&kgs=85c232d6dddce1a2&utm_source=bdsle,ptotple,shrtsdl,sh/x/loc/uni/m1/1",
  },
  {
    name: "Ghaziabad (Unit-2)",
    address:
      "Khasra no. 712, khasra no. 713, Industrial area, Meerut road, Behind HLM College, Vill DuhaI, Muradnagar, Ghaziabad, UP 201206",
    mapLink:
      "https://www.google.com/search?sca_esv=2d75fd89a7b477b4&authuser=1&sxsrf=ANbL-n4wj2XZr3prMvGNaHc9V1A8sbaKVA:1769595077173&kgmid=/g/11wtph0ngd&q=STAR+LINE+GLASS+INDUSTRIES+(Unit+-+2)&shem=bdsle,ptotple,shrtsdl&shndl=30&source=sh/x/loc/uni/m1/1&kgs=0df508bdad3cefbb&utm_source=bdsle,ptotple,shrtsdl,sh/x/loc/uni/m1/1",
  },
];

const phoneNumbers = [
  { number: "98110 31824", href: "tel:+919811031824", label: "Sales" },
  { number: "98110 31849", href: "tel:+919811031849", label: "Inquiry" },
  {
    number: "98110 31835",
    href: "tel:+919811031835",
    label: "CEO: Mohd Sartaj Saifi",
  },
];

const contactInfo = {
  email: "starlineglassind22@gmail.com",
  timing: "9 AM - 7 PM",
};

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Desktop & Tablet: Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info - Full width on mobile */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0 flex flex-col items-center lg:items-start">
            <Link href="/" className="inline-block mb-5 lg:mb-4">
              <Image
                src="/logo/star-line-logo.png"
                alt="Star Line Glass Logo"
                width={200}
                height={80}
                className="h-20 md:h-16 lg:h-16 w-auto object-contain scale-110 lg:scale-[1.35] lg:scale-x-[1.5] origin-center lg:origin-left"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs text-center lg:text-left">
              Premium glass solutions for architectural and interior
              applications. Quality, innovation, and excellence since
              establishment.
            </p>
            {/* Social Media Icons */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mt-5">
              <Link
                href="https://www.facebook.com/share/1BX7Sh8eFb/"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-secondary flex items-center justify-center transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
              <Link
                href="https://www.instagram.com/starlineglassindustries?igsh=MTNtMmZybmI4MGhvNw=="
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-secondary flex items-center justify-center transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </Link>
              <Link
                href="https://x.com/STARLINE_GL"
                aria-label="X"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-secondary flex items-center justify-center transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              <Link
                href="https://youtube.com/@starlneglass?si=nwcHJXol-UeE6wUb"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-secondary flex items-center justify-center transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 relative">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-brand-secondary"></span>
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-brand-secondary transition-all duration-200"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 relative">
              Our Products
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-brand-secondary"></span>
            </h3>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-brand-secondary transition-all duration-200"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Spans 2 columns on larger screens */}
          <div className="col-span-2 md:col-span-2 lg:col-span-2">
            <h3 className="text-white font-semibold text-base mb-4 relative">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-brand-secondary"></span>
            </h3>

            {/* Phone Numbers */}
            <div className="mb-4">
              <div className="flex items-start gap-2">
                <svg
                  className="w-4 h-4 text-white mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div className="flex flex-col gap-1">
                  {phoneNumbers.map((phone, index) => (
                    <Link
                      key={index}
                      href={phone.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                    >
                      +91 {phone.number}
                      {phone.label && (
                        <span className="text-gray-500 ml-2">
                          ({phone.label})
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="mb-4">
              <div className="flex items-start gap-2">
                <svg
                  className="w-4 h-4 text-white mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <Link
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  {contactInfo.email}
                </Link>
              </div>
            </div>

            {/* Timing */}
            <div className="mb-5">
              <div className="flex items-start gap-2">
                <svg
                  className="w-4 h-4 text-white mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-gray-400 text-sm">
                  {contactInfo.timing}
                </span>
              </div>
            </div>

            {/* Addresses - Side by side on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {branches.map((branch, index) => (
                <div key={index} className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-white mt-0.5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <p className="text-white text-sm font-medium mb-1">
                      {branch.name}
                    </p>
                    <p className="text-gray-400 text-xs leading-relaxed mb-2">
                      {branch.address}
                    </p>
                    <Link
                      href={branch.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-white/80 hover:text-white text-xs font-medium transition-colors duration-200"
                    >
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      View on Google Maps
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Star Line Glass. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <Link
                href="/"
                className="text-gray-500 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-700">|</span>
              <Link
                href="/"
                className="text-gray-500 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Developer Credit Banner */}
      <div className="bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-center text-xs text-gray-500">
            Made with <span className="text-red-500">❤️</span> by{" "}
            <Link
              href="https://www.quiotech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white font-medium transition-colors duration-200"
            >
              Quiotech
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
