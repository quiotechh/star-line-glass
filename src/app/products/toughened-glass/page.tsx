import type { Metadata } from "next";
import { getProductBySlug } from "@/data/products";
import ProductDetailPage from "@/components/ProductDetailPage";
import { notFound } from "next/navigation";

const product = getProductBySlug("toughened-glass");

export const metadata: Metadata = {
  title: `${product?.name || "Toughened Glass"} - Star Line Glass`,
  description:
    product?.tagline ||
    "Premium toughened glass - 5x stronger than regular glass, engineered for safety and durability.",
};

export default function ToughenedGlassPage() {
  if (!product) {
    notFound();
  }

  return <ProductDetailPage product={product} />;
}
