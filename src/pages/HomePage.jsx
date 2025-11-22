import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import './HomePage.css';
import { Product } from './Product';


export function HomePage({ cart, setCart }) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products').then((response) => {
      setProducts(response.data);
    });
  }, []);

  async function loadCart() {
    const response = await axios.get("/api/cart-items");
    setCart(response.data);
  }

  return (
    <>
      <title>Ecommerce Project</title>
      <Header cart={cart} />

      <div className="home-page">
        <div className="products-grid">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              loadCart={loadCart}
            />
          ))}
        </div>
      </div>
    </>
  );
}
