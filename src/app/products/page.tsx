import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Products - Star Line Glass",
  description: "Explore our range of premium glass products including annealed glass, toughened glass, fluted glass, insulated glasses, laminate safety glass, heat soaked glass, fabric glass, bulletproof glass, and patterned glass.",
};

const products = [
  {
    name: "Annealed Glass",
    href: "/products/annealed-glass",
    description: "Standard float glass that has been slowly cooled to relieve internal stresses.",
  },
  {
    name: "Toughened Glass",
    href: "/products/toughened-glass",
    description: "Heat-treated glass that is 4-5 times stronger than regular glass.",
  },
  {
    name: "Fluted Glass",
    href: "/products/fluted-glass",
    description: "Decorative glass with vertical grooves that diffuse light beautifully.",
  },
  {
    name: "Insulated Glasses",
    href: "/products/insulated-glasses",
    description: "Double or triple glazed units for superior thermal and acoustic insulation.",
  },
  {
    name: "Laminate Safety Glass",
    href: "/products/laminate-safety-glass",
    description: "Two or more glass layers bonded with a protective interlayer for enhanced safety.",
  },
  {
    name: "Heat Soaked Glass",
    href: "/products/heat-soaked-glass",
    description: "Toughened glass that undergoes additional heat treatment for higher reliability.",
  },
  {
    name: "Fabric Glass",
    href: "/products/fabric-glass",
    description: "Innovative decorative glass with fabric-inspired textures and patterns for artistic interiors.",
  },
  {
    name: "Bulletproof Glass",
    href: "/products/bulletproof-glass",
    description: "Ballistic-resistant security glass designed for high-protection environments.",
  },
  {
    name: "Patterned Glass",
    href: "/products/patterned-glass",
    description: "Decorative textured glass offering privacy with beautiful light diffusion.",
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-brand-primary mb-6">Our Products</h1>
        <p className="text-lg text-gray-600 mb-12">
          Discover our comprehensive range of premium glass solutions for every need.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className="group block p-6 bg-white rounded-xl border border-gray-200 hover:border-brand-primary hover:shadow-lg transition-all duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-900 group-hover:text-brand-primary transition-colors mb-3">
                {product.name}
              </h2>
              <p className="text-gray-600">{product.description}</p>
              <span className="inline-flex items-center mt-4 text-brand-primary font-medium">
                Learn more
                <svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
