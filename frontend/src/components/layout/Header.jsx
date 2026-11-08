import { Link, NavLink } from 'react-router-dom'
import { useStore } from '../../context/store-context'
import Logo from './Logo'

const pill = 'flex h-[39px] items-center justify-center rounded-full border px-3 text-xs'
const navLink = ({ isActive }) => (isActive ? 'text-crimson' : 'hover:text-crimson')

export default function Header() {
  const { count, search, setSearch, user } = useStore()
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/95 backdrop-blur-lg">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center gap-x-4 gap-y-2 px-[18px] py-3 sm:px-6 md:h-[78px] md:flex-nowrap md:gap-10 md:py-0">
        <Logo />
        <nav className="order-3 flex w-full gap-6 overflow-x-auto text-[13px] md:order-none md:w-auto md:flex-1">
          <NavLink to="/" end className={navLink}>Home</NavLink>
          <NavLink to="/shop" className={navLink}>Shop</NavLink>
          <a href="/#categories" className="hover:text-crimson">Categories</a>
          <a href="/#featured" className="hover:text-crimson">Featured</a>
        </nav>
        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <label className={`${pill} w-[130px] justify-start gap-[7px] border-line bg-white sm:w-[205px]`}>
            <span aria-hidden>⌕</span>
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search products..." className="w-full bg-transparent text-xs outline-none" />
          </label>
          {user ? (
            <Link to="/account" className={`${pill} border-crimson text-crimson`}>Hi, {user.name.split(' ')[0]}</Link>
          ) : (
            <Link to="/login" className={`${pill} border-crimson bg-crimson text-white`}>Login</Link>
          )}
          <Link to="/orders" aria-label="Orders" className={`${pill} hidden border-line bg-white md:flex`}>♡</Link>
          <Link to="/cart" className={`${pill} gap-[7px] border-line bg-white`}>
            Bag
            <b key={count} className="grid size-[19px] animate-pop place-items-center rounded-full bg-crimson text-[10px] text-white motion-reduce:animate-none">{count}</b>
          </Link>
        </div>
      </div>
    </header>
  )
}
