"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TransactionActions } from "./TransactionActions";
import { Badge } from "@/components/ui/badge";

// This will be replaced with actual data from MongoDB
const transactionData = [
  {
    id: "1",
    date: "2024-03-20",
    time: "14:30",
    orderId: "#345672",
    customer: "John Doe",
    amount: 45.99,
    paymentMethod: "Credit Card",
    status: "completed",
  },
  {
    id: "2",
    date: "2024-03-20",
    time: "14:25",
    orderId: "#345671",
    customer: "Jane Smith",
    amount: 32.50,
    paymentMethod: "Cash",
    status: "pending",
  },
];

export function TransactionList() {
  return (
    <div className="bg-white rounded-lg shadow">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Order ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Payment Method</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactionData.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>{transaction.time}</TableCell>
              <TableCell>{transaction.orderId}</TableCell>
              <TableCell>{transaction.customer}</TableCell>
              <TableCell>${transaction.amount.toFixed(2)}</TableCell>
              <TableCell>{transaction.paymentMethod}</TableCell>
              <TableCell>
                <Badge
                  variant={transaction.status === "completed" ? "success" : "warning"}
                >
                  {transaction.status}
                </Badge>
              </TableCell>
              <TableCell>
                <TransactionActions transactionId={transaction.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}