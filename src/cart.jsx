import { createContext, useContext, useEffect, useState } from 'react';

const Ctx = createContext(null);
const load = (key) => { try { return JSON.parse(localStorage.getItem(key)) || []; } catch { return []; } };

// Cart + orders live in localStorage for now; the backend will replace this later.
export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => load('cart'));
  const [orders, setOrders] = useState(() => load('orders'));
  useEffect(() => localStorage.setItem('cart', JSON.stringify(cart)), [cart]);
  useEffect(() => localStorage.setItem('orders', JSON.stringify(orders)), [orders]);

  const addToCart = (product, quantity = 1) => setCart((c) =>
    c.some((i) => i.product.id === product.id)
      ? c.map((i) => (i.product.id === product.id ? { ...i, quantity: Math.min(i.quantity + quantity, 10) } : i))
      : [...c, { product, quantity }]);
  const setQuantity = (id, quantity) => setCart((c) => c.map((i) => (i.product.id === id ? { ...i, quantity } : i)));
  const removeItem = (id) => setCart((c) => c.filter((i) => i.product.id !== id));

  const subtotalCents = cart.reduce((s, i) => s + i.product.priceCents * i.quantity, 0);
  const itemCount = cart.reduce((n, i) => n + i.quantity, 0);

  const placeOrder = ({ address, shipping, shippingCents, paymentMethod }) => {
    const now = Date.now();
    setOrders((o) => [{
      id: now.toString(36).toUpperCase(), orderTimeMs: now, address, paymentMethod,
      totalCostCents: subtotalCents + shippingCents,
      products: cart.map((i) => ({ product: i.product, quantity: i.quantity, estimatedDeliveryTimeMs: now + shipping.days * 864e5 })),
    }, ...o]);
    setCart([]);
  };

  return <Ctx.Provider value={{ cart, orders, itemCount, subtotalCents, addToCart, setQuantity, removeItem, placeOrder }}>{children}</Ctx.Provider>;
}

export const useCart = () => useContext(Ctx);
