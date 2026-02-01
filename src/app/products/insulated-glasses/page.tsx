import type { Metadata } from "next";
import { getProductBySlug } from "@/data/products";
import ProductDetailPage from "@/components/ProductDetailPage";
import { notFound } from "next/navigation";

const product = getProductBySlug("insulated-glasses");

export const metadata: Metadata = {
  title: `${product?.name || "Insulated Glass Units"} - Star Line Glass`,
  description:
    product?.tagline ||
    "Premium insulated glass units - double the protection, triple the efficiency for thermal and acoustic insulation.",
};

export default function InsulatedGlassesPage() {
  if (!product) {
    notFound();
  }

  return <ProductDetailPage product={product} />;
}
