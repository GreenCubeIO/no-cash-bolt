"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Home,
  MessageSquare,
  Users,
  Receipt,
  ClipboardList,
  Package,
  ArrowLeftRight,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";

const menuItems = [
  { icon: Home, label: "Inicio", href: "/" },
  { icon: MessageSquare, label: "Mensajes", href: "/messages" },
  { heading: "Administrativo" },
  { icon: Receipt, label: "Transacciones", href: "/transactions" },
  { icon: Users, label: "Clientes", href: "/customers" },
  { icon: ClipboardList, label: "Ingresos", href: "/income" },
  { icon: ArrowLeftRight, label: "Transferencias", href: "/transfers" },
  { heading: "Otros" },
  { icon: Receipt, label: "Invoices", href: "/invoices" },
  { icon: Package, label: "Inventario", href: "/inventory" },
  { heading: "" },
  { icon: Settings, label: "Configuración", href: "/settings" },
  { icon: HelpCircle, label: "Ayuda & Soporte", href: "/support" },
  { icon: LogOut, label: "Salir", href: "/logout" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-64 bg-[#6366F1] text-white min-h-screen">
      <div className="p-4 flex items-center gap-2 border-b border-indigo-400">
        <Package className="h-6 w-6" />
        <span className="font-bold text-xl">No Cash</span>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => {
            if ("heading" in item) {
              return (
                <li key={index} className="text-sm text-indigo-200 mt-4 mb-2 px-3">
                  {item.heading}
                </li>
              );
            }

            const Icon = item.icon;
            return (
              <li key={index}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                    pathname === item.href
                      ? "bg-indigo-700 text-white"
                      : "text-indigo-100 hover:bg-indigo-600"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}