import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toughened Glass - Star Line Glass",
  description: "Premium toughened glass products - heat-treated glass that is 4-5 times stronger than regular glass.",
};

export default function ToughenedGlassPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-brand-primary mb-6">Toughened Glass</h1>
        <p className="text-lg text-gray-600">
          Toughened glass, also known as tempered glass, is heat-treated to be 4-5 times stronger than regular glass.
          When broken, it shatters into small, blunt pieces rather than sharp shards.
        </p>
      </div>
    </div>
  );
}
