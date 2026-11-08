import { useEffect, useMemo, useState } from 'react'
import { StoreContext } from './store-context'
import { FREE_SHIPPING_CENTS, MAX_QTY, SHIPPING_FEE_CENTS } from '../config'

const read = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback
  } catch {
    return fallback
  }
}

// Cart, customer login, admin login and the header search live here so any page can use them.
export default function StoreProvider({ children }) {
  const [search, setSearch] = useState('')
  const [cart, setCart] = useState(() => read('lumora_cart', []))
  const [user, setUser] = useState(() => read('lumora_user', null))
  const [isAdmin, setIsAdmin] = useState(() => localStorage.getItem('lumora_admin') === 'true')

  useEffect(() => localStorage.setItem('lumora_cart', JSON.stringify(cart)), [cart])

  const addToCart = (product, qty = 1) =>
    setCart((items) => {
      const found = items.find((i) => i.product.id === product.id)
      return found
        ? items.map((i) => (i.product.id === product.id ? { ...i, qty: Math.min(MAX_QTY, i.qty + qty) } : i))
        : [...items, { product, qty }]
    })

  const updateQty = (id, qty) =>
    setCart((items) =>
      qty < 1 ? items.filter((i) => i.product.id !== id) : items.map((i) => (i.product.id === id ? { ...i, qty: Math.min(MAX_QTY, qty) } : i))
    )

  const removeFromCart = (id) => setCart((items) => items.filter((i) => i.product.id !== id))
  const clearCart = () => setCart([])

  const login = (u) => {
    localStorage.setItem('lumora_user', JSON.stringify(u))
    setUser(u)
  }
  const logout = () => {
    localStorage.removeItem('lumora_user')
    setUser(null)
  }
  const adminLogin = () => {
    localStorage.setItem('lumora_admin', 'true')
    setIsAdmin(true)
  }
  const adminLogout = () => {
    localStorage.removeItem('lumora_admin')
    setIsAdmin(false)
  }

  const totals = useMemo(() => {
    const count = cart.reduce((s, i) => s + i.qty, 0)
    const subtotal = cart.reduce((s, i) => s + i.product.priceCents * i.qty, 0)
    const shipping = subtotal >= FREE_SHIPPING_CENTS ? 0 : SHIPPING_FEE_CENTS
    return { count, subtotal, shipping, total: subtotal + shipping }
  }, [cart])

  return (
    <StoreContext.Provider
      value={{ search, setSearch, cart, ...totals, addToCart, updateQty, removeFromCart, clearCart, user, login, logout, isAdmin, adminLogin, adminLogout }}
    >
      {children}
    </StoreContext.Provider>
  )
}
