import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Heat Soaked Glass - Star Line Glass",
  description: "Reliable heat soaked glass - toughened glass with additional heat treatment for higher reliability and safety.",
};

export default function HeatSoakedGlassPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-brand-primary mb-6">Heat Soaked Glass</h1>
        <p className="text-lg text-gray-600">
          Heat soaked glass is toughened glass that undergoes an additional heat treatment process.
          This process helps identify and eliminate glass panels with nickel sulfide inclusions,
          significantly reducing the risk of spontaneous breakage.
        </p>
      </div>
    </div>
  );
}
