
import products from '../data/products.json'
import { useStore } from '../context/store-context'
import Section from '../components/ui/Section'
import SectionHead from '../components/ui/SectionHead'
import HeroSlider from '../components/home/HeroSlider'
import CategoryTile from '../components/home/CategoryTile'
import TrustStrip from '../components/home/TrustStrip'
import ProductGrid from '../components/shop/ProductGrid'

const categories = ['Clothing', 'Footwear', 'Accessories']

export default function HomePage() {
  const { addToCart, search } = useStore()

  const featured = products
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .slice(0, 8)

  return (
    <>
      <HeroSlider />

      <Section id="categories">
        <SectionHead
          eyebrow="SHOP BY"
          title="Find your everyday"
          linkTo="/shop"
          linkText="View all"
        />

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
          {categories.map((name, i) => (
            <CategoryTile
              key={name}
              index={i}
              name={name}
              count={products.filter((p) => p.category === name).length}
            />
          ))}
        </div>
      </Section>

      <Section id="featured">
        <SectionHead
          eyebrow="CURATED FOR YOU"
          title="Featured collection"
          linkTo="/shop"
          linkText="Shop all"
        />

        <ProductGrid products={featured} onAdd={addToCart} />
      </Section>

      <TrustStrip />
    </>
  )
}
