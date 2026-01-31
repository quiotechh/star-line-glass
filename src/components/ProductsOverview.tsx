import Link from "next/link";
import Image from "next/image";

const products = [
  {
    name: "Annealed Glass",
    href: "/products/annealed-glass",
    image: "/products/annealed-glass.jpg",
  },
  {
    name: "Toughened / Tempered Glass",
    href: "/products/toughened-glass",
    image: "/products/toughened-glass.jpg",
  },
  {
    name: "Insulated Glass Units (IGUs)",
    href: "/products/insulated-glasses",
    image: "/products/insulated-glass.jpg",
  },
  {
    name: "Laminated Safety Glass",
    href: "/products/laminate-safety-glass",
    image: "/products/laminated-safety-glass.jpg",
  },
  {
    name: "Heat Soaked Glass",
    href: "/products/heat-soaked-glass",
    image: "/products/heat-soaked-glass.jpg",
  },
  {
    name: "Fluted Glass",
    href: "/products/fluted-glass",
    image: "/products/fluted-glass.jpg",
  },
];

export default function ProductsOverview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Products
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            <span className="font-semibold text-gray-900">At STAR LINE GLASS,</span> we take pride in offering a versatile range of architectural glass solutions designed to meet the evolving needs of modern construction. Each glass type is crafted with precision to deliver superior performance, safety, and aesthetic appeal, making them ideal for both exterior and interior applications across commercial, residential, and institutional projects.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-[4/3] mb-4 transition-all duration-300 group-hover:shadow-xl group-hover:ring-2 group-hover:ring-brand-primary/20">
                {/* Placeholder for image - replace with actual Image component when images are added */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
                  <span className="text-teal-600/50 text-sm">Image placeholder</span>
                </div>
                {/* Uncomment when images are added to public/products/ folder:
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                */}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center group-hover:text-brand-primary transition-colors duration-200">
                {product.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
