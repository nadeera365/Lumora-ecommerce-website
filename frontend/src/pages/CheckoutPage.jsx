import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useStore } from '../context/store-context'
import { imageUrl, money } from '../utils/money'
import { saveLastOrder } from '../utils/orders'
import Section from '../components/ui/Section'
import AuthCard from '../components/ui/AuthCard'
import FormField from '../components/ui/FormField'
import Button from '../components/ui/Button'
import SummaryCard, { SummaryRow } from '../components/cart/SummaryCard'

const empty = { name: '', email: '', phone: '', address: '', city: '' }

export default function CheckoutPage() {
  const { cart, total, clearCart } = useStore()
  const navigate = useNavigate()
  const [form, setForm] = useState(empty)
  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value })

  if (!cart.length) return <Navigate to="/cart" />

  const placeOrder = (e) => {
    e.preventDefault()
    saveLastOrder({ id: 'LM-' + Date.now().toString().slice(-7), items: cart, total, status: 'Pending', customer: form })
    clearCart()
    navigate('/orders')
  }

  return (
    <Section>
      <Link to="/cart" className="mb-[25px] inline-block text-xs text-muted">← Back to bag</Link>
      <div className="grid gap-[30px] lg:grid-cols-[1.5fr_.7fr] lg:gap-[45px]">
        <AuthCard wide eyebrow="CHECKOUT" title="Almost yours.">
          <form onSubmit={placeOrder}>
            <div className="mt-[25px] grid gap-[15px]">
              <FormField label="Full name" required value={form.name} onChange={set('name')} />
              <FormField label="Email" type="email" required value={form.email} onChange={set('email')} />
              <FormField label="Phone" required value={form.phone} onChange={set('phone')} />
              <FormField label="Address" required value={form.address} onChange={set('address')} />
              <FormField label="City" required value={form.city} onChange={set('city')} />
            </div>
            <div className="mt-[15px] bg-soft p-[15px] text-[11px]">
              Payment method
              <strong className="mt-[5px] block">PayHere / Online payment</strong>
              <small className="mt-[5px] block text-muted">Gateway will be connected in the backend phase.</small>
            </div>
            <Button size="lg" full className="mt-[15px]">Place order →</Button>
          </form>
        </AuthCard>

        <SummaryCard eyebrow="YOUR ORDER">
          {cart.map(({ product, qty }) => (
            <div key={product.id} className="grid grid-cols-[45px_1fr_auto] items-center gap-2.5 py-[11px] text-xs">
              <img src={imageUrl(product)} alt="" className="h-[55px] w-[45px] object-cover" />
              <span>{product.name}<small className="mt-1 block text-[10px] text-muted">Qty {qty}</small></span>
              <b>{money(product.priceCents * qty)}</b>
            </div>
          ))}
          <SummaryRow label="Total" value={money(total)} total />
        </SummaryCard>
      </div>
    </Section>
  )
}
