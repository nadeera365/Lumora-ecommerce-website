import { useState } from 'react';
import { Link } from 'react-router-dom';
import { assetUrl } from '../api/products';
import { useCart } from '../cart';
import { formatMoney } from '../utils/money';

export function Product({ product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const add = () => { addToCart(product, quantity); setAdded(true); setTimeout(() => setAdded(false), 1200); };

  return (
    <div className="product-container">
      <Link to={`/product/${product.id}`}>
        <div className="product-image-container">
          <img className="product-image" src={assetUrl(product.image)} alt={product.name} />
        </div>
        <div className="product-name limit-text-to-2-lines">{product.name}</div>
      </Link>
      <div className="product-rating-container">
        <img className="product-rating-stars" src={`/images/ratings/rating-${product.rating.stars * 10}.png`} alt="" />
        <div className="product-rating-count link-primary">{product.rating.count}</div>
      </div>
      <div className="product-price">{formatMoney(product.priceCents)}</div>
      <div className="product-quantity-container">
        <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => <option key={n} value={n}>{n}</option>)}
        </select>
      </div>
      <div className="product-spacer"></div>
      <button className="add-to-cart-button button-primary" onClick={add}>{added ? 'Added ✓' : 'Add to Cart'}</button>
    </div>
  );
}
