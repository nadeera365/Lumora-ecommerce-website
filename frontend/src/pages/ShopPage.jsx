
import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import products from '../data/products.json'
import { useStore } from '../context/store-context'
import Section from '../components/ui/Section'
import PageHeading from '../components/ui/PageHeading'
import ShopToolbar from '../components/shop/ShopToolbar'
import ProductGrid from '../components/shop/ProductGrid'

const categories = ['All', 'Clothing', 'Footwear', 'Accessories']

export default function ShopPage() {
  const { addToCart, search } = useStore()
  const [params, setParams] = useSearchParams()
  const [category, setCategory] = useState('All')
  const [sort, setSort] = useState('featured')

  const gender = params.get('gender') || 'All'

  const setGender = (g) =>
    setParams(g === 'All' ? {} : { gender: g })

  const list = useMemo(
    () =>
      products
        .filter(
          (p) =>
            (category === 'All' || p.category === category) &&
            (gender === 'All' || p.gender === gender) &&
            p.name.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) =>
          sort === 'low'
            ? a.priceCents - b.priceCents
            : sort === 'high'
              ? b.priceCents - a.priceCents
              : b.rating.count - a.rating.count
        ),
    [category, gender, search, sort]
  )

  return (
    <Section>
      <PageHeading
        eyebrow="THE COLLECTION"
        title="Shop everything"
      >
        Find considered pieces for every part of your day.
      </PageHeading>

      <ShopToolbar
        gender={gender}
        onGender={setGender}
        categories={categories}
        category={category}
        onCategory={setCategory}
        sort={sort}
        onSort={setSort}
      />

      <p className="mb-5 text-xs text-muted">
        {list.length} products
      </p>

      <ProductGrid products={list} onAdd={addToCart} />
    </Section>
  )
}
