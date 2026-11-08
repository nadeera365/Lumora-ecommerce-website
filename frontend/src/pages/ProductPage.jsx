import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import products from '../data/products.json'
import { useStore } from '../context/store-context'
import { imageUrl, money } from '../utils/money'
import Section from '../components/ui/Section'
import Eyebrow from '../components/ui/Eyebrow'
import Rating from '../components/ui/Rating'
import QtyStepper from '../components/ui/QtyStepper'
import Button from '../components/ui/Button'
import EmptyState from '../components/ui/EmptyState'

export default function ProductPage() {
  const { id } = useParams()
  const { addToCart } = useStore()
  const [qty, setQty] = useState(1)
  const product = products.find((p) => p.id === id)

  if (!product) return <EmptyState title="Product not found" actionTo="/shop" actionText="Back to shop" />

  return (
    <Section>
      <Link to="/shop" className="mb-[25px] inline-block text-xs text-muted">← Back to collection</Link>
      <div className="grid items-center gap-[30px] md:grid-cols-[1.05fr_.95fr] md:gap-[70px]">
        <div className="h-[440px] bg-[#eee] md:h-[620px]">
          <img src={imageUrl(product)} alt={product.name} className="size-full object-cover" />
        </div>
        <div>
          <Eyebrow>{product.category} · {product.gender}</Eyebrow>
          <h1 className="my-[15px] font-serif text-[42px] font-semibold leading-[1.05] tracking-tight md:text-[55px]">{product.name}</h1>
          <Rating stars={product.rating.stars} count={product.rating.count} label="reviews" />
          <div className="my-[25px] text-2xl font-bold">{money(product.priceCents)}</div>
          <p className="max-w-[500px] leading-[1.8] text-muted">{product.description}</p>
          <div className="my-[22px] text-xs text-[#4d6b58]">
            ● {product.stock > 10 ? 'In stock, ready to ship' : `${product.stock} left in stock`}
          </div>
          <div className="flex gap-2.5">
            <QtyStepper value={qty} onChange={setQty} />
            <Button size="lg" onClick={() => addToCart(product, qty)}>Add to bag →</Button>
          </div>
          <div className="mt-7 border-t border-line pt-5 text-[11px] text-muted">✓ Quality checked &nbsp; ✓ Secure packaging &nbsp; ✓ Easy returns</div>
        </div>
      </div>
    </Section>
  )
}
