import { Link } from 'react-router-dom'
import { STORE_NAME } from '../../config'

export default function Logo({ light = false }) {
  return (
    <Link to="/" className="flex items-center gap-[9px] whitespace-nowrap text-[15px] font-bold tracking-[.18em]">
      <span className={`grid size-[31px] place-items-center rounded-full font-serif text-lg italic ${light ? 'bg-white text-ink' : 'bg-crimson text-white'}`}>L</span>
      {STORE_NAME}
    </Link>
  )
}
