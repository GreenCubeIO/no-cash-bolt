import { CategoryTabs } from "@/components/pos/CategoryTabs";
import { ProductGrid } from "@/components/pos/ProductGrid";
import { SearchBar } from "@/components/pos/SearchBar";
import { OrderSidebar } from "@/components/pos/OrderSidebar";

export default function POSPage() {
  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Home</h1>
          <SearchBar />
          <CategoryTabs />
          <ProductGrid />
        </div>
      </div>
      <OrderSidebar />
    </div>
  );
}