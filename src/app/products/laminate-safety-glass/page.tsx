import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laminate Safety Glass - Star Line Glass",
  description: "Premium laminate safety glass - two or more glass layers bonded with a protective interlayer for enhanced safety.",
};

export default function LaminateSafetyGlassPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-brand-primary mb-6">Laminate Safety Glass</h1>
        <p className="text-lg text-gray-600">
          Laminate safety glass consists of two or more glass layers bonded together with a protective interlayer (PVB or SGP).
          When broken, the glass fragments adhere to the interlayer, reducing the risk of injury.
        </p>
      </div>
    </div>
  );
}
