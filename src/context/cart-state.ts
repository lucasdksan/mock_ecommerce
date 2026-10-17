import { createContext } from 'react'

export type CartContextValue = {
  count: number
  addItem: () => void
}

export const CartContext = createContext<CartContextValue | null>(null)
