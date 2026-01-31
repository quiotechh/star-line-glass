import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Star Line Glass",
  description: "Learn about Star Line Glass, our history, values, and commitment to providing premium glass solutions.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-brand-primary mb-6">About Us</h1>
        <p className="text-lg text-gray-600">
          Welcome to Star Line Glass. This page will contain information about our company.
        </p>
      </div>
    </div>
  );
}
