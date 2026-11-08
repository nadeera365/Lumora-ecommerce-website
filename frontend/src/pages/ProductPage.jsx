import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { assetUrl, fetchProduct, fetchProducts } from '../api/products';
import { FREE_SHIPPING_CENTS } from '../config';
import { useCart } from '../cart';
import { formatMoney } from '../utils/money';
import { Product } from './Product';

export function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setQty(1);
    fetchProduct(id).then((p) => {
      setProduct(p);
      if (p) fetchProducts().then((all) => setRelated(all.filter((x) => x.category === p.category && x.id !== p.id).slice(0, 4)));
    });
  }, [id]);

  const add = () => { addToCart(product, qty); setAdded(true); setTimeout(() => setAdded(false), 1500); };

  return (
    <>
      <title>{product ? product.name : 'Product'}</title>
      <div className="page-wrap">
        {!product ? <p>Loading…</p> : (
          <>
            <p className="crumbs"><Link to="/">Home</Link> / <Link to={`/?category=${product.category}`}>{product.category}</Link></p>
            <div className="pp">
              <div className="pp-img"><img src={assetUrl(product.image)} alt={product.name} /></div>
              <div>
                <h1>{product.name}</h1>
                <div className="rating">
                  <img src={`/images/ratings/rating-${product.rating.stars * 10}.png`} alt={`${product.rating.stars} out of 5 stars`} /> {product.rating.count} reviews
                </div>
                <div className="pp-price">{formatMoney(product.priceCents)}</div>
                <p className={product.stock < 10 ? 'stock low' : 'stock'}>{product.stock < 10 ? `Only ${product.stock} left` : 'In stock'}</p>
                <p>{product.description}</p>
                <div className="row">
                  <select value={qty} onChange={(e) => setQty(Number(e.target.value))} aria-label="Quantity">
                    {[...Array(Math.min(10, product.stock))].map((_, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)}
                  </select>
                  <button className="btn" onClick={add}>{added ? 'Added to cart' : 'Add to cart'}</button>
                  <Link className="btn alt" to="/cart">View cart</Link>
                </div>
                <p className="note">Free standard shipping on orders over {formatMoney(FREE_SHIPPING_CENTS)}.</p>
              </div>
            </div>
            {related.length > 0 && (
              <>
                <h2 className="section-title">More in {product.category}</h2>
                <div className="products-grid">{related.map((p) => <Product key={p.id} product={p} />)}</div>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}
