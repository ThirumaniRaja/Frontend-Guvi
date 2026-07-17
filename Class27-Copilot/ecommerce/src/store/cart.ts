import { create } from "zustand";

export type CartItem = { id: number; title: string; price: number; qty: number; thumbnail?: string }

type CartState = {
  items: CartItem[]
  add: (item: CartItem) => void
  remove: (id: number) => void
  updateQty: (id: number, qty: number) => void
  clear: () => void
  total: () => number
}

export const useCart = create<CartState>((set, get) => ({
  items: [],
  add: (item) => {
    const items = get().items.slice()
    const idx = items.findIndex(i => i.id === item.id)
    if (idx > -1) items[idx].qty += item.qty
    else items.push(item)
    set({ items })
  },
  remove: (id) => set({ items: get().items.filter(i => i.id !== id) }),
  updateQty: (id, qty) => set({ items: get().items.map(i => i.id === id ? { ...i, qty } : i) }),
  clear: () => set({ items: [] }),
  total: () => get().items.reduce((s, i) => s + i.price * i.qty, 0)
}))