"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OrdersTable from "@/components/orders/OrdersTable";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function OrdersPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="h-full flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Orders</h1>
        <div className="flex items-center gap-4">
          <div className="relative w-[300px]">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              className="pl-10"
              placeholder="Search by ID here..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button>Export</Button>
        </div>
      </div>

      <Tabs defaultValue="order-history" className="flex-1">
        <TabsList>
          <TabsTrigger value="order-history">Order history</TabsTrigger>
          <TabsTrigger value="orders-on-hold">Orders on hold</TabsTrigger>
        </TabsList>
        <TabsContent value="order-history" className="flex-1">
          <OrdersTable filter="all" searchQuery={searchQuery} />
        </TabsContent>
        <TabsContent value="orders-on-hold" className="flex-1">
          <OrdersTable filter="on-hold" searchQuery={searchQuery} />
        </TabsContent>
      </Tabs>
    </div>
  );
}