import { FREE_SHIPPING_CENTS } from '../../config'
import { money } from '../../utils/money'

export default function TopBar() {
  return (
    <div className="flex h-[34px] items-center justify-center gap-3 bg-ink px-2 text-center text-[8px] uppercase tracking-[.12em] text-white sm:text-[10px]">
      <span>Free islandwide delivery over {money(FREE_SHIPPING_CENTS)}</span>
      <span>•</span>
      <span className="hidden sm:inline">Secure checkout</span>
      <span className="hidden sm:inline">•</span>
      <span>Easy returns</span>
    </div>
  )
}
