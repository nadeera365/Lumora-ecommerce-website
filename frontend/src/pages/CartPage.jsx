import { useStore } from '../context/store-context'
import { money } from '../utils/money'
import Section from '../components/ui/Section'
import PageHeading from '../components/ui/PageHeading'
import EmptyState from '../components/ui/EmptyState'
import Button from '../components/ui/Button'
import CartItem from '../components/cart/CartItem'
import SummaryCard, { SummaryRow } from '../components/cart/SummaryCard'

export default function CartPage() {
  const { cart, count, subtotal, shipping, total, updateQty, removeFromCart } = useStore()

  return (
    <Section>
      <PageHeading eyebrow="YOUR BAG" title="Shopping cart">{count} items</PageHeading>
      {!cart.length ? (
        <EmptyState title="Your bag is waiting." actionTo="/shop" actionText="Continue shopping" />
      ) : (
        <div className="grid gap-[30px] lg:grid-cols-[1.5fr_.7fr] lg:gap-[45px]">
          <div>
            {cart.map((item) => (
              <CartItem key={item.product.id} item={item} onQty={updateQty} onRemove={removeFromCart} />
            ))}
          </div>
          <SummaryCard eyebrow="ORDER SUMMARY">
            <SummaryRow label="Subtotal" value={money(subtotal)} />
            <SummaryRow label="Delivery" value={shipping ? money(shipping) : 'FREE'} />
            <SummaryRow label="Total" value={money(total)} total />
            <Button to="/checkout" size="lg" full className="mt-3">Continue to checkout →</Button>
          </SummaryCard>
        </div>
      )}
    </Section>
  )
}
