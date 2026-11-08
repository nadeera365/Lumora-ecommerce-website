import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../cart';
import { STORE_NAME } from '../config';
import './SiteHeader.css';

const NAV = [
  ['All', '/'], ['Women', '/?gender=Women'], ['Men', '/?gender=Men'], ['Clothing', '/?category=Clothing'],
  ['Footwear', '/?category=Footwear'], ['Accessories', '/?category=Accessories'],
];

export function Header() {
  const { itemCount } = useCart();
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const [q, setQ] = useState(new URLSearchParams(search).get('q') || '');
  const submit = (e) => { e.preventDefault(); navigate(q.trim() ? `/?q=${encodeURIComponent(q.trim())}` : '/'); };

  return (
    <header className="site-header">
      <div className="top-row">
        <Link to="/" className="brand">{STORE_NAME}</Link>
        <form className="search" onSubmit={submit} role="search">
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search products" aria-label="Search products" />
          <button aria-label="Search"><img src="/images/icons/search-icon.png" alt="" /></button>
        </form>
        <nav className="top-links">
          <Link to="/orders">Orders</Link>
          <Link to="/cart" className="cart-link">
            <img src="/images/icons/cart-icon.png" alt="" /><b>{itemCount}</b><span>Cart</span>
          </Link>
        </nav>
      </div>
      <nav className="cat-row" aria-label="Categories">
        {NAV.map(([label, to]) => (
          <Link key={label} to={to} className={pathname + search === to ? 'active' : ''}>{label}</Link>
        ))}
      </nav>
    </header>
  );
}
