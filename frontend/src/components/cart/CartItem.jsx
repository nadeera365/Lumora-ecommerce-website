import { imageUrl, money } from '../../utils/money'
import QtyStepper from '../ui/QtyStepper'

export default function CartItem({ item, onQty, onRemove }) {
  const { product, qty } = item
  return (
    <div className="grid grid-cols-[75px_1fr] items-start gap-[18px] border-t border-line py-[18px] sm:grid-cols-[100px_1fr_auto]">
      <img src={imageUrl(product)} alt={product.name} className="h-[95px] w-[75px] object-cover sm:h-[120px] sm:w-[100px]" />
      <div>
        <small className="text-[9px] uppercase text-muted">{product.category}</small>
        <h3 className="my-1.5 text-sm">{product.name}</h3>
        <b>{money(product.priceCents)}</b>
        <div className="mt-[15px] flex items-center gap-5">
          <QtyStepper value={qty} min={0} onChange={(q) => onQty(product.id, q)} />
          <button onClick={() => onRemove(product.id)} className="text-[11px] text-muted hover:text-ink">Remove</button>
        </div>
      </div>
      <strong className="col-start-2 sm:col-start-auto">{money(product.priceCents * qty)}</strong>
    </div>
  )
}
