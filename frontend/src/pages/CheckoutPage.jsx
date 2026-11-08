import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FREE_SHIPPING_CENTS, SHIPPING_METHODS } from '../config';
import { useCart } from '../cart';
import { formatMoney } from '../utils/money';

const FIELDS = [
  ['fullName', 'Full name'], ['phone', 'Phone'], ['line1', 'Address', true], ['city', 'City'], ['postalCode', 'Postal code'],
];

export function CheckoutPage() {
  const { cart, subtotalCents, placeOrder } = useCart();
  const navigate = useNavigate();
  const [shipId, setShipId] = useState(SHIPPING_METHODS[0].id);
  const [form, setForm] = useState({ fullName: '', phone: '', line1: '', city: '', postalCode: '' });

  const ship = SHIPPING_METHODS.find((s) => s.id === shipId);
  const shippingCents = ship.id === 'standard' && subtotalCents >= FREE_SHIPPING_CENTS ? 0 : ship.cents;

  const submit = (e) => {
    e.preventDefault();
    placeOrder({ address: form, shipping: ship, shippingCents, paymentMethod: 'cod' });
    navigate('/orders');
  };

  return (
    <>
      <title>Checkout</title>
      <div className="page-wrap">
        <h1 className="page-h">Checkout</h1>
        {cart.length === 0 ? (
          <div className="empty"><p>Your cart is empty.</p><Link className="btn" to="/">Start shopping</Link></div>
        ) : (
          <form className="cart-grid" onSubmit={submit}>
            <div className="stack">
              <section className="box">
                <h2>Delivery address</h2>
                <div className="form-grid">
                  {FIELDS.map(([key, label, full]) => (
                    <div key={key} className={full ? 'field full' : 'field'}>
                      <label htmlFor={key}>{label}</label>
                      <input id={key} required value={form[key]} onChange={(e) => setForm({ ...form, [key]: e.target.value })} />
                    </div>
                  ))}
                </div>
              </section>
              <section className="box">
                <h2>Delivery method</h2>
                {SHIPPING_METHODS.map((m) => (
                  <label key={m.id} className="choice">
                    <input type="radio" name="ship" checked={shipId === m.id} onChange={() => setShipId(m.id)} />
                    <span>{m.label} (about {m.days} days)</span>
                    <b>{m.id === 'standard' && subtotalCents >= FREE_SHIPPING_CENTS ? 'Free' : formatMoney(m.cents)}</b>
                  </label>
                ))}
              </section>
              <section className="box">
                <h2>Payment</h2>
                <label className="choice"><input type="radio" name="pay" defaultChecked /><span>Cash on delivery</span></label>
                <label className="choice disabled"><input type="radio" name="pay" disabled /><span>Card payment (coming soon)</span></label>
              </section>
            </div>
            <aside className="box">
              <h2>Order summary</h2>
              {cart.map(({ product, quantity }) => (
                <div className="sum-row" key={product.id}><span>{product.name} × {quantity}</span><span>{formatMoney(product.priceCents * quantity)}</span></div>
              ))}
              <div className="sum-row"><span>Subtotal</span><span>{formatMoney(subtotalCents)}</span></div>
              <div className="sum-row"><span>Shipping</span><span>{shippingCents ? formatMoney(shippingCents) : 'Free'}</span></div>
              <div className="sum-row total"><span>Total</span><span>{formatMoney(subtotalCents + shippingCents)}</span></div>
              <button className="btn block" type="submit">Place order</button>
            </aside>
          </form>
        )}
      </div>
    </>
  );
}
