import type { Metadata } from "next";
import { getProductBySlug } from "@/data/products";
import ProductDetailPage from "@/components/ProductDetailPage";
import { notFound } from "next/navigation";

const product = getProductBySlug("fluted-glass");

export const metadata: Metadata = {
  title: `${product?.name || "Fluted Glass"} - Star Line Glass`,
  description:
    product?.tagline ||
    "Elegant fluted glass - ribbed texture for privacy with style, where aesthetics meet functionality.",
};

export default function FlutedGlassPage() {
  if (!product) {
    notFound();
  }

  return <ProductDetailPage product={product} />;
}
