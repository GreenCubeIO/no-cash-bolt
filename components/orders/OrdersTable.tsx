"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Order {
  id: string;
  details: string;
  date: string;
  time: string;
  type: "dine-in" | "takeaway";
  status: "complete" | "on-hold" | "cancelled";
  price: number;
}

const dummyOrders: Order[] = [
  {
    id: "3456872",
    details: "x2 Chicken BBQ pizza",
    date: "2/2/2024",
    time: "03:36",
    type: "takeaway",
    status: "on-hold",
    price: 3250.65,
  },
  {
    id: "3456873",
    details: "x1 Vegetables pizza",
    date: "2/2/2024",
    time: "03:37",
    type: "dine-in",
    status: "complete",
    price: 50.65,
  },
  // Add more dummy orders as needed
];

interface OrdersTableProps {
  filter: "all" | "on-hold";
  searchQuery: string;
}

export default function OrdersTable({ filter, searchQuery }: OrdersTableProps) {
  const filteredOrders = dummyOrders
    .filter((order) => {
      if (filter === "on-hold") {
        return order.status === "on-hold";
      }
      return true;
    })
    .filter((order) =>
      order.id.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Order details</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Order type</TableHead>
            <TableHead>Order Status</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredOrders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.details}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.time}</TableCell>
              <TableCell>
                <span className="capitalize">{order.type}</span>
              </TableCell>
              <TableCell>
                <Badge
                  className={cn(
                    "capitalize",
                    order.status === "complete" && "bg-green-100 text-green-800",
                    order.status === "on-hold" && "bg-yellow-100 text-yellow-800",
                    order.status === "cancelled" && "bg-red-100 text-red-800"
                  )}
                >
                  {order.status}
                </Badge>
              </TableCell>
              <TableCell>{order.price.toFixed(2)} EGP</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}