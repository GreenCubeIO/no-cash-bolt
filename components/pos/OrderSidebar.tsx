"use client";

import { Button } from "@/components/ui/button";
import { useOrderStore } from "@/lib/store";

export function OrderSidebar() {
  const items = useOrderStore((state) => state.items);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="w-[400px] border-l bg-white p-6 flex flex-col">
      <h2 className="text-2xl font-bold mb-4">Order details</h2>
      
      <div className="flex-1 overflow-auto">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center py-2 border-b"
          >
            <div>
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm text-gray-500">
                Quantity: {item.quantity}
              </p>
            </div>
            <p className="font-medium">
              {(item.price * item.quantity).toFixed(2)} EGP
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t">
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>{total.toFixed(2)} EGP</span>
        </div>
        <div className="flex justify-between mb-4">
          <span>Tax (5%)</span>
          <span>{(total * 0.05).toFixed(2)} EGP</span>
        </div>
        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>{(total * 1.05).toFixed(2)} EGP</span>
        </div>
        <Button className="w-full mt-4">Continue</Button>
      </div>
    </div>
  );
}