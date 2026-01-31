import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Star Line Glass",
  description: "Get in touch with Star Line Glass for all your glass product inquiries and requirements.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-brand-primary mb-6">Contact Us</h1>
        <p className="text-lg text-gray-600">
          Get in touch with us for all your glass product inquiries.
        </p>
      </div>
    </div>
  );
}
