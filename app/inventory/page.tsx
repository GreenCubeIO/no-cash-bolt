"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, Plus } from "lucide-react";
import { InventoryFilters } from "@/components/inventory/InventoryFilters";
import { InventoryActions } from "@/components/inventory/InventoryActions";

// This will be replaced with actual data from MongoDB
const inventoryData = [
  {
    id: "1",
    name: "Classic Burger",
    category: "Burgers",
    stock: 150,
    minStock: 50,
    costPrice: 2.50,
    retailPrice: 8.99,
    lastUpdated: "2024-03-20",
  },
  // Add more items as needed
];

export default function InventoryPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Inventory Management</h1>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Item
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
          <Input
            placeholder="Search inventory..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <InventoryFilters />
      </div>

      <div className="bg-white rounded-lg shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Min Stock</TableHead>
              <TableHead>Cost Price</TableHead>
              <TableHead>Retail Price</TableHead>
              <TableHead>Last Updated</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inventoryData.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.stock}</TableCell>
                <TableCell>{item.minStock}</TableCell>
                <TableCell>${item.costPrice.toFixed(2)}</TableCell>
                <TableCell>${item.retailPrice.toFixed(2)}</TableCell>
                <TableCell>{item.lastUpdated}</TableCell>
                <TableCell>
                  <InventoryActions itemId={item.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}