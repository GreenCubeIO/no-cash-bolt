"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Home,
  MessageSquare,
  Users,
  Receipt,
  FileText,
  BarChart3,
  ArrowLeftRight,
  Package,
  Settings,
  HelpCircle,
} from "lucide-react";

const navigation = [
  { name: "Inicio", href: "/", icon: Home },
  { name: "Mensajes", href: "/messages", icon: MessageSquare },
  {
    name: "Administrativo",
    items: [
      { name: "Transacciones", href: "/transactions", icon: Receipt },
      { name: "Clientes", href: "/customers", icon: Users },
      { name: "Ingresos", href: "/income", icon: BarChart3 },
      { name: "Transferencias", href: "/transfers", icon: ArrowLeftRight },
    ],
  },
  {
    name: "Otros",
    items: [
      { name: "Invoices", href: "/invoices", icon: FileText },
      { name: "Inventario", href: "/inventory", icon: Package },
    ],
  },
];

const bottomNavigation = [
  { name: "Configuración", href: "/settings", icon: Settings },
  { name: "Ayuda & Soporte", href: "/support", icon: HelpCircle },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-64 bg-indigo-600 text-white min-h-screen">
      <div className="flex items-center h-16 px-4 border-b border-indigo-500">
        <Package className="w-6 h-6 mr-2" />
        <h1 className="text-xl font-bold">No Cash</h1>
      </div>

      <nav className="flex-1 px-2 py-4 space-y-6">
        {navigation.map((group, index) => (
          <div key={group.name || index}>
            {group.name && !group.href && (
              <h2 className="px-4 text-xs font-semibold text-indigo-200 uppercase tracking-wider">
                {group.name}
              </h2>
            )}
            <div className="mt-2 space-y-1">
              {group.href ? (
                <Link
                  href={group.href}
                  className={cn(
                    "flex items-center px-4 py-2 text-sm rounded-lg transition-colors",
                    pathname === group.href
                      ? "bg-indigo-700 text-white"
                      : "text-indigo-100 hover:bg-indigo-700 hover:text-white"
                  )}
                >
                  <group.icon className="mr-3 h-5 w-5" />
                  {group.name}
                </Link>
              ) : (
                group.items?.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center px-4 py-2 text-sm rounded-lg transition-colors",
                      pathname === item.href
                        ? "bg-indigo-700 text-white"
                        : "text-indigo-100 hover:bg-indigo-700 hover:text-white"
                    )}
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.name}
                  </Link>
                ))
              )}
            </div>
          </div>
        ))}
      </nav>

      <div className="px-2 py-4 border-t border-indigo-500">
        {bottomNavigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex items-center px-4 py-2 text-sm rounded-lg transition-colors mb-1",
              pathname === item.href
                ? "bg-indigo-700 text-white"
                : "text-indigo-100 hover:bg-indigo-700 hover:text-white"
            )}
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}