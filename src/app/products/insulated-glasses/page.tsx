import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insulated Glasses - Star Line Glass",
  description: "High-performance insulated glass units - double or triple glazed for superior thermal and acoustic insulation.",
};

export default function InsulatedGlassesPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-brand-primary mb-6">Insulated Glasses</h1>
        <p className="text-lg text-gray-600">
          Insulated glass units (IGUs) consist of two or more glass panes separated by a spacer and sealed together.
          They provide excellent thermal and acoustic insulation for energy-efficient buildings.
        </p>
      </div>
    </div>
  );
}
