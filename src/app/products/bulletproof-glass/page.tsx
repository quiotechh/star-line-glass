import type { Metadata } from "next";
import { getProductBySlug } from "@/data/products";
import ProductDetailPage from "@/components/ProductDetailPage";
import { notFound } from "next/navigation";

const product = getProductBySlug("bulletproof-glass");

export const metadata: Metadata = {
  title: `${product?.name || "Bulletproof Glass"} - Star Line Glass`,
  description:
    product?.tagline ||
    "Ballistic-resistant security glass for ultimate protection.",
};

export default function BulletproofGlassPage() {
  if (!product) {
    notFound();
  }

  return <ProductDetailPage product={product} />;
}
