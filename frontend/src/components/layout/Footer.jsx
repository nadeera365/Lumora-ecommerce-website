import { Link } from 'react-router-dom'
import Logo from './Logo'

const linkClass = 'my-[9px] block text-xs text-[#c4b8bd] hover:text-white'
const headClass = 'text-[11px] font-bold uppercase tracking-[.12em]'

export default function Footer() {
  return (
    <footer className="bg-ink pb-6 pt-[60px] text-white">
      <div className="mx-auto grid max-w-[1240px] gap-[45px] px-[18px] sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.5fr_1fr_1fr_1.5fr]">
        <div>
          <Logo light />
          <p className="my-[9px] text-xs text-[#c4b8bd]">Thoughtful essentials for everyday living.</p>
        </div>
        <div>
          <h4 className={headClass}>Shop</h4>
          <Link to="/shop" className={linkClass}>All products</Link>
          <Link to="/shop?gender=Women" className={linkClass}>Women</Link>
          <Link to="/shop?gender=Men" className={linkClass}>Men</Link>
        </div>
        <div>
          <h4 className={headClass}>Help</h4>
          <Link to="/orders" className={linkClass}>Orders &amp; tracking</Link>
          <Link to="/account" className={linkClass}>My account</Link>
          <a href="#" className={linkClass}>Delivery</a>
          <a href="#" className={linkClass}>Returns</a>
        </div>
        <div>
          <h4 className={headClass}>Stay in the loop</h4>
          <p className="my-[9px] text-xs text-[#c4b8bd]">New drops, offers and inspiration.</p>
          <div className="flex">
            <input placeholder="Your email" aria-label="Your email" className="h-10 min-w-0 flex-1 bg-white px-3 text-ink outline-none" />
            <button className="bg-crimson px-[15px] hover:bg-rose">Join</button>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-[1240px] px-[18px] sm:px-6"><div className="border-t border-[#4d2a36] pt-5 text-[10px] text-[#a597a0]">
        © 2026 LUMORA. All rights reserved.
      </div></div>
    </footer>
  )
}
