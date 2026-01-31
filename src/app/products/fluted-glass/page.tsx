import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fluted Glass - Star Line Glass",
  description: "Elegant fluted glass products - decorative glass with vertical grooves that diffuse light beautifully.",
};

export default function FlutedGlassPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-brand-primary mb-6">Fluted Glass</h1>
        <p className="text-lg text-gray-600">
          Fluted glass features elegant vertical grooves that create a beautiful light-diffusing effect.
          Perfect for decorative applications, partitions, and privacy screens.
        </p>
      </div>
    </div>
  );
}
