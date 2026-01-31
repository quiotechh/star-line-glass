import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects - Star Line Glass",
  description: "View our portfolio of completed glass installation projects across various industries.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-brand-primary mb-6">Our Projects</h1>
        <p className="text-lg text-gray-600">
          Explore our portfolio of successful glass installations and projects.
        </p>
      </div>
    </div>
  );
}
