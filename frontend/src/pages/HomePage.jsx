import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { HeroSlider } from '../components/HeroSlider';
import { fetchProducts } from '../api/products';
import './HomePage.css';
import { Product } from './Product';

export function HomePage() {
  const [products, setProducts] = useState([]);
  const [params] = useSearchParams();
  const category = params.get('category');
  const gender = params.get('gender');
  const q = params.get('q') || '';

  useEffect(() => { fetchProducts().then(setProducts); }, []);

  const filtering = category || gender || q;
  const shown = products.filter((p) =>
    (!category || p.category === category) && (!gender || p.gender === gender) &&
    (!q || p.name.toLowerCase().includes(q.toLowerCase())));
  const title = q ? `Results for “${q}”` : category || (gender ? `${gender}’s collection` : 'Popular products');

  return (
    <>
      <title>Ecommerce Project</title>
      <div className="home-page">
        {!filtering && <HeroSlider />}
        <h2 className="section-title">{title}</h2>
        <div className="products-grid">
          {shown.map((product) => <Product key={product.id} product={product} />)}
        </div>
        {products.length > 0 && shown.length === 0 && (
          <p>No products found. <Link to="/">See all products</Link></p>
        )}
      </div>
    </>
  );
}
