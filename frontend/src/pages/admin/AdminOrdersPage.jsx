import { recentOrders } from '../../data/mockAdmin'
import { money } from '../../utils/money'
import StatusBadge from '../../components/ui/StatusBadge'
import AdminPanel, { AdminRow } from '../../components/admin/AdminPanel'

export default function AdminOrdersPage() {
  return (
    <AdminPanel title="Orders">
      {recentOrders.map((o) => (
        <AdminRow key={o.id}>
          <b>#{o.id}</b>
          <span>{o.customer}</span>
          <StatusBadge status={o.status} />
          <strong>{money(o.total * 100)}</strong>
        </AdminRow>
      ))}
    </AdminPanel>
  )
}
