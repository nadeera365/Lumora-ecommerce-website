import { getLastOrder } from '../utils/orders'
import { money } from '../utils/money'
import Section from '../components/ui/Section'
import PageHeading from '../components/ui/PageHeading'
import StatusBadge from '../components/ui/StatusBadge'
import EmptyState from '../components/ui/EmptyState'
import Button from '../components/ui/Button'

export default function OrdersPage() {
  const order = getLastOrder()

  return (
    <Section>
      <PageHeading eyebrow="ACCOUNT" title="Your orders" />
      {order ? (
        <div className="flex items-center justify-between gap-4 border border-line bg-white p-[25px]">
          <div>
            <StatusBadge status={order.status || 'Processing'} />
            <h3 className="my-1.5 text-lg font-semibold">Order #{order.id}</h3>
            <p className="text-sm text-muted">{order.items.length} product(s) · {money(order.total)}</p>
          </div>
          <Button to="/tracking" variant="outline" size="sm">Track order</Button>
        </div>
      ) : (
        <EmptyState title="No orders yet." actionTo="/shop" actionText="Start shopping" />
      )}
    </Section>
  )
}
