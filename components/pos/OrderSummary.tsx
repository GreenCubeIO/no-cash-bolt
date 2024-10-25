"use client";

import { Button } from "@/components/ui/button";
import { useOrderStore } from "@/lib/store";
import { Minus, Plus, Trash2 } from "lucide-react";

export default function OrderSummary() {
  const { items, orderType, removeItem, updateQuantity, setOrderType } = useOrderStore();

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  return (
    <div className="bg-white rounded-lg p-6 h-full flex flex-col">
      <div className="flex gap-2 mb-6">
        <Button
          variant={orderType === "dine-in" ? "default" : "outline"}
          className="flex-1"
          onClick={() => setOrderType("dine-in")}
        >
          Dine in
        </Button>
        <Button
          variant={orderType === "takeaway" ? "default" : "outline"}
          className="flex-1"
          onClick={() => setOrderType("takeaway")}
        >
          Takeaway
        </Button>
      </div>

      <div className="flex-1 overflow-auto">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-4 mb-4">
            <div className="flex-1">
              <h4 className="font-medium">{item.name}</h4>
              <p className="text-sm text-gray-600">{item.price} EGP</p>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center">{item.quantity}</span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
              <Button
                variant="destructive"
                size="icon"
                className="h-8 w-8"
                onClick={() => removeItem(item.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t pt-4 mt-4">
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>{subtotal.toFixed(2)} EGP</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Tax (5%)</span>
          <span>{tax.toFixed(2)} EGP</span>
        </div>
        <div className="flex justify-between font-bold mb-4">
          <span>Total</span>
          <span>{total.toFixed(2)} EGP</span>
        </div>
        
        <Button className="w-full">Continue</Button>
      </div>
    </div>
  );
}