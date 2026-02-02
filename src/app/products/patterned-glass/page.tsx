import type { Metadata } from "next";
import { getProductBySlug } from "@/data/products";
import ProductDetailPage from "@/components/ProductDetailPage";
import { notFound } from "next/navigation";

const product = getProductBySlug("patterned-glass");

export const metadata: Metadata = {
  title: `${product?.name || "Patterned Glass"} - Star Line Glass`,
  description:
    product?.tagline ||
    "Decorative textured glass offering privacy with beautiful light diffusion.",
};

export default function PatternedGlassPage() {
  if (!product) {
    notFound();
  }

  return <ProductDetailPage product={product} />;
}
