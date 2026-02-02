import type { Metadata } from "next";
import { getProductBySlug } from "@/data/products";
import ProductDetailPage from "@/components/ProductDetailPage";
import { notFound } from "next/navigation";

const product = getProductBySlug("fabric-glass");

export const metadata: Metadata = {
  title: `${product?.name || "Fabric Glass"} - Star Line Glass`,
  description:
    product?.tagline ||
    "Innovative decorative glass with fabric-inspired textures and patterns.",
};

export default function FabricGlassPage() {
  if (!product) {
    notFound();
  }

  return <ProductDetailPage product={product} />;
}
