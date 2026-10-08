import { Link } from 'react-router-dom';
import { assetUrl } from '../api/products';
import { useCart } from '../cart';
import { formatMoney } from '../utils/money';

export function CartPage() {
  const { cart, setQuantity, removeItem, subtotalCents } = useCart();
  return (
    <>
      <title>Cart</title>
      <div className="page-wrap">
        <h1 className="page-h">Your cart</h1>
        {cart.length === 0 ? (
          <div className="empty"><p>Your cart is empty.</p><Link className="btn" to="/">Start shopping</Link></div>
        ) : (
          <div className="cart-grid">
            <div>
              {cart.map(({ product, quantity }) => (
                <div className="line" key={product.id}>
                  <img src={assetUrl(product.image)} alt="" />
                  <div>
                    <Link to={`/product/${product.id}`}>{product.name}</Link>
                    <div>{formatMoney(product.priceCents)}</div>
                    <div className="row">
                      <select value={quantity} aria-label="Quantity" onChange={(e) => setQuantity(product.id, Number(e.target.value))}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => <option key={n} value={n}>{n}</option>)}
                      </select>
                      <button className="link-btn" onClick={() => removeItem(product.id)}>Remove</button>
                    </div>
                  </div>
                  <strong>{formatMoney(product.priceCents * quantity)}</strong>
                </div>
              ))}
            </div>
            <aside className="box">
              <h2>Order summary</h2>
              <div className="sum-row"><span>Subtotal</span><span>{formatMoney(subtotalCents)}</span></div>
              <div className="sum-row"><span>Shipping</span><span>At checkout</span></div>
              <Link className="btn block" to="/checkout">Proceed to checkout</Link>
            </aside>
          </div>
        )}
      </div>
    </>
  );
}
