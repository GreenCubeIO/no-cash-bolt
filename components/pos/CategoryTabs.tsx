"use client";

import { Button } from "@/components/ui/button";
import { 
  Utensils, 
  Pizza, 
  Coffee, 
  IceCream, 
  Sandwich,
  Salad,
  Soup,
  Dessert
} from "lucide-react";
import { IconType } from "@/types";

interface Category {
  id: string;
  label: string;
  icon: IconType;
}

const categories: Category[] = [
  { id: "all", label: "All", icon: Utensils },
  { id: "burgers", label: "Burger", icon: Sandwich },
  { id: "pizza", label: "Pizza", icon: Pizza },
  { id: "drinks", label: "Drink", icon: Coffee },
  { id: "desserts", label: "Dessert", icon: IceCream },
  { id: "salads", label: "Salads", icon: Salad },
  { id: "soups", label: "Soups", icon: Soup },
  { id: "sweets", label: "Sweets", icon: Dessert },
];

export function CategoryTabs() {
  return (
    <div className="flex gap-2 my-4 overflow-x-auto pb-2">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <Button
            key={category.id}
            variant={category.id === "all" ? "default" : "outline"}
            className="flex items-center gap-2 whitespace-nowrap"
          >
            <Icon className="h-4 w-4" />
            {category.label}
          </Button>
        );
      })}
    </div>
  );
}