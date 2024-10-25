"use client";

import { IProduct } from "@/types";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  products: IProduct[];
  selectedCategory?: string;
}

export function ProductGrid({ products, selectedCategory }: ProductGridProps) {
  const filteredProducts = selectedCategory && selectedCategory !== "all"
    ? products.filter(product => product.category.name.toLowerCase() === selectedCategory.toLowerCase())
    : products;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {filteredProducts.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}