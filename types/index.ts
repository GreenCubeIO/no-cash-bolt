import { LucideIcon } from "lucide-react";

export type IconType = LucideIcon;

export interface IProduct {
  _id: string;
  name: string;
  category: ICategory;
  foodWarnings: IFoodWarning[];
  medias: any[];
  retailPrice: number;
  costPrice: number;
  nutrition: INutritionData;
  icon: IconType;
  cafeteria: ICafeteria | null;
  available: boolean;
}

export interface INutritionData {
  calories: number;
  protein: number;
  fat: number;
  carbohydrates: number;
  fiber: number;
  sugar: number;
  sodium: number;
}

export interface IFoodWarning {
  name: "Gluten" | "Lácteos" | "Nueces" | "Soja" | "Mariscos" | "Huevos";
  color: 'gluten' | 'dairy' | 'nuts' | 'soy' | 'shellfish' | 'eggs';
  present: boolean;
}

export interface ICategory {
  _id?: string;
  name: string;
  icon: IconType;
}

export interface ICafeteria {
  _id: string;
  name: string;
  // Add other cafeteria properties as needed
}

export const FoodWarnings: IFoodWarning[] = [
  { name: "Gluten", present: false, color: "gluten" },
  { name: "Lácteos", present: false, color: "dairy" },
  { name: "Nueces", present: false, color: "nuts" },
  { name: "Soja", present: false, color: "soy" },
  { name: "Mariscos", present: false, color: "shellfish" },
  { name: "Huevos", present: false, color: "eggs" },
];