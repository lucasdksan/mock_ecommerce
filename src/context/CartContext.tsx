import { useCallback, useMemo, useState, type ReactNode } from 'react'
import { CartContext } from './cart-state'

export function CartProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0)

  const addItem = useCallback(() => {
    setCount((c) => c + 1)
  }, [])

  const value = useMemo(
    () => ({
      count,
      addItem,
    }),
    [count, addItem],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
