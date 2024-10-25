import { create } from 'zustand';
import { IProduct } from '@/types/product';

interface OrderItem {
  product: IProduct;
  quantity: number;
  notes?: string;
}

interface OrderState {
  items: OrderItem[];
  addItem: (product: IProduct) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  updateNotes: (productId: string, notes: string) => void;
  clearOrder: () => void;
  total: number;
}

export const useOrderStore = create<OrderState>((set) => ({
  items: [],
  total: 0,

  addItem: (product) =>
    set((state) => {
      const existingItem = state.items.find((item) => item.product._id === product._id);
      
      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.product._id === product._id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: state.total + product.retailPrice,
        };
      }

      return {
        items: [...state.items, { product, quantity: 1 }],
        total: state.total + product.retailPrice,
      };
    }),

  removeItem: (productId) =>
    set((state) => {
      const item = state.items.find((item) => item.product._id === productId);
      return {
        items: state.items.filter((item) => item.product._id !== productId),
        total: state.total - (item ? item.product.retailPrice * item.quantity : 0),
      };
    }),

  updateQuantity: (productId, quantity) =>
    set((state) => {
      const item = state.items.find((item) => item.product._id === productId);
      if (!item) return state;

      const oldTotal = item.product.retailPrice * item.quantity;
      const newTotal = item.product.retailPrice * quantity;

      return {
        items: state.items.map((item) =>
          item.product._id === productId ? { ...item, quantity } : item
        ),
        total: state.total - oldTotal + newTotal,
      };
    }),

  updateNotes: (productId, notes) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.product._id === productId ? { ...item, notes } : item
      ),
    })),

  clearOrder: () => set({ items: [], total: 0 }),
}));