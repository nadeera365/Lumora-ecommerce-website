import { customers } from '../../data/mockAdmin'
import AdminPanel, { AdminRow } from '../../components/admin/AdminPanel'

export default function AdminCustomersPage() {
  return (
    <AdminPanel title="Customers">
      {customers.map((c) => (
        <AdminRow key={c.email}>
          <b>{c.name}</b>
          <span>{c.email}</span>
          <span>{c.orders} orders</span>
          <strong>Active</strong>
        </AdminRow>
      ))}
    </AdminPanel>
  )
}
