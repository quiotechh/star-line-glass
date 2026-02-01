import type { Metadata } from "next";
import { getProductBySlug } from "@/data/products";
import ProductDetailPage from "@/components/ProductDetailPage";
import { notFound } from "next/navigation";

const product = getProductBySlug("annealed-glass");

export const metadata: Metadata = {
  title: `${product?.name || "Annealed Glass"} - Star Line Glass`,
  description:
    product?.tagline ||
    "Premium annealed glass - the foundation of all glass products, versatile and cost-effective.",
};

export default function AnnealedGlassPage() {
  if (!product) {
    notFound();
  }

  return <ProductDetailPage product={product} />;
}
