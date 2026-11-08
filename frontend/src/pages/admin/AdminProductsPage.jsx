import products from '../../data/products.json'
import { imageUrl, money } from '../../utils/money'
import Button from '../../components/ui/Button'
import AdminPanel, { AdminRow } from '../../components/admin/AdminPanel'

export default function AdminProductsPage() {
  return (
    <AdminPanel title="Products" action={<Button size="sm">+ Add product</Button>}>
      {products.slice(0, 10).map((p) => (
        <AdminRow key={p.id} cols="grid-cols-[40px_1fr] md:grid-cols-[45px_1.5fr_1fr_.8fr_auto]">
          <img src={imageUrl(p)} alt="" className="h-[50px] w-10 object-cover" />
          <b>{p.name}</b>
          <span className="hidden md:block">{p.category}</span>
          <strong className="hidden md:block">{money(p.priceCents)}</strong>
          <button className="hidden border border-line bg-white px-2.5 py-[7px] text-[10px] md:block">Edit</button>
        </AdminRow>
      ))}
    </AdminPanel>
  )
}
