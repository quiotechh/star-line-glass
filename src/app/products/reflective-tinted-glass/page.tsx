import type { Metadata } from "next";
import { getProductBySlug } from "@/data/products";
import ProductDetailPage from "@/components/ProductDetailPage";
import { notFound } from "next/navigation";

const product = getProductBySlug("reflective-tinted-glass");

export const metadata: Metadata = {
  title: `${product?.name || "Reflective Tinted Glass"} - Star Line Glass`,
  description:
    product?.tagline ||
    "Premium reflective and tinted glass - designed for aesthetic appeal and energy efficiency.",
};

export default function ReflectiveTintedGlassPage() {
  if (!product) {
    notFound();
  }

  return <ProductDetailPage product={product} />;
}
