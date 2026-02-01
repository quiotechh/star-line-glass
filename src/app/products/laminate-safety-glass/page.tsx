import type { Metadata } from "next";
import { getProductBySlug } from "@/data/products";
import ProductDetailPage from "@/components/ProductDetailPage";
import { notFound } from "next/navigation";

const product = getProductBySlug("laminate-safety-glass");

export const metadata: Metadata = {
  title: `${product?.name || "Laminated Safety Glass"} - Star Line Glass`,
  description:
    product?.tagline ||
    "Premium laminated safety glass - holds together even when shattered for maximum safety.",
};

export default function LaminateSafetyGlassPage() {
  if (!product) {
    notFound();
  }

  return <ProductDetailPage product={product} />;
}
