"use client";

import { Card } from "@/components/ui/card";
import { IProduct } from "@/types";
import { useOrderStore } from "@/lib/store";

interface ProductCardProps {
  product: IProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useOrderStore((state) => state.addItem);

  const handleAddToOrder = () => {
    addItem({
      id: product._id,
      name: product.name,
      price: product.retailPrice,
      quantity: 1,
    });
  };

  return (
    <Card 
      className="p-4 cursor-pointer hover:shadow-lg transition-shadow"
      onClick={handleAddToOrder}
    >
      <div className="flex flex-col items-center">
        {product.medias.length > 0 ? (
          <img 
            src={product.medias[0]} 
            alt={product.name}
            className="w-32 h-32 object-cover rounded-md mb-4"
          />
        ) : (
          <div className="w-32 h-32 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
            No Image
          </div>
        )}
        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
        <p className="text-primary font-bold">${product.retailPrice.toFixed(2)}</p>
      </div>
    </Card>
  );
}