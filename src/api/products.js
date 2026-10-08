import axios from 'axios';
import fallback from '../data/products.json';

// Uses the real backend when it is running, otherwise the local sample data,
// so the UI can be built before the API exists.
export async function fetchProducts() {
  try {
    const { data } = await axios.get('/api/products', { timeout: 2500 });
    return Array.isArray(data) ? data : data.items;
  } catch {
    return fallback;
  }
}

export const assetUrl = (path) => '/' + path.replace(/^\//, '');

export async function fetchProduct(id) {
  try {
    const { data } = await axios.get(`/api/products/${id}`, { timeout: 2500 });
    return data.product || data;
  } catch {
    return fallback.find((p) => p.id === id || p.slug === id) || null;
  }
}
