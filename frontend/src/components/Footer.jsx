import { Link } from 'react-router-dom';
import { STORE_NAME } from '../config';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div><h3>{STORE_NAME}</h3><p>Clothing, footwear and everyday home essentials, delivered to your door.</p></div>
        <div>
          <h3>Shop</h3>
          <Link to="/?gender=Women">Women</Link><Link to="/?gender=Men">Men</Link>
          <Link to="/?category=Clothing">Clothing</Link><Link to="/?category=Footwear">Footwear</Link>
        </div>
        <div><h3>My account</h3><Link to="/orders">Orders</Link><Link to="/cart">Cart</Link><Link to="/checkout">Checkout</Link></div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} {STORE_NAME}. All rights reserved.</div>
    </footer>
  );
}
