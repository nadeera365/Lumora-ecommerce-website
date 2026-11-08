import products from '../../data/products.json'
import { recentOrders, stats } from '../../data/mockAdmin'
import { money } from '../../utils/money'
import StatCard from '../../components/admin/StatCard'
import AdminPanel, { AdminRow } from '../../components/admin/AdminPanel'

export default function AdminDashboardPage() {
  return (
    <>
      <div className="mb-5 grid gap-[15px] sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) => <StatCard key={s.label} {...s} />)}
        <StatCard label="Products" value={products.length} note="Active catalog" />
      </div>
      <AdminPanel title="Recent orders" linkTo="/admin/orders" linkText="View all">
        {recentOrders.slice(0, 4).map((o) => (
          <AdminRow key={o.id} cols="grid-cols-3">
            <b>#{o.id}</b>
            <span>{o.status}</span>
            <strong>{money(o.total * 100)}</strong>
          </AdminRow>
        ))}
      </AdminPanel>
    </>
  )
}
