import type { Metadata } from "next";
import { getProductBySlug } from "@/data/products";
import ProductDetailPage from "@/components/ProductDetailPage";
import { notFound } from "next/navigation";

const product = getProductBySlug("heat-soaked-glass");

export const metadata: Metadata = {
  title: `${product?.name || "Heat Soaked Glass"} - Star Line Glass`,
  description:
    product?.tagline ||
    "Premium heat soaked glass - eliminating spontaneous breakage, the gold standard in safety assurance.",
};

export default function HeatSoakedGlassPage() {
  if (!product) {
    notFound();
  }

  return <ProductDetailPage product={product} />;
}
