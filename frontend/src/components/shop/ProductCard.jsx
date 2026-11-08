import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { imageUrl, money } from '../../utils/money'
import Rating from '../ui/Rating'

export default function ProductCard({ product, onAdd }) {
  const [added, setAdded] = useState(false)

  useEffect(() => {
    if (!added) return
    const t = setTimeout(() => setAdded(false), 900)
    return () => clearTimeout(t)
  }, [added])

  const add = () => {
    onAdd(product)
    setAdded(true)
  }

  return (
    <article className="group min-w-0 bg-white">
      <Link to={`/product/${product.id}`} className="relative block h-[220px] overflow-hidden bg-[#eee] sm:h-[270px] lg:h-[330px]">
        <img src={imageUrl(product)} alt={product.name} className="size-full object-cover transition duration-500 group-hover:scale-[1.035]" />
        <span className="absolute left-3 top-3 bg-white px-[9px] py-1.5 text-[9px] uppercase tracking-[.08em]">
          {product.stock < 10 ? 'Low stock' : 'In stock'}
        </span>
        <button aria-label="Save to wishlist" onClick={(e) => e.preventDefault()} className="absolute right-3 top-3 size-8 rounded-full bg-white text-[17px]">♡</button>
      </Link>
      <div className="px-1 pb-1 pt-[15px]">
        <small className="text-[9px] uppercase tracking-[.13em] text-muted">{product.category}</small>
        <Link to={`/product/${product.id}`} className="my-[7px] block text-sm font-semibold">{product.name}</Link>
        <Rating stars={product.rating.stars} count={product.rating.count} />
        <div className="mt-[13px] flex items-center justify-between">
          <strong className="text-sm">{money(product.priceCents)}</strong>
          <button onClick={add} className="border border-line bg-white px-3 py-2 text-[11px] transition hover:border-crimson hover:bg-crimson hover:text-white">
            {added ? 'Added ✓' : '+ Add'}
          </button>
        </div>
      </div>
    </article>
  )
}
