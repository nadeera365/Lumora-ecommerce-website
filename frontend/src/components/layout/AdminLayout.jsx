import { Link, NavLink, Navigate, Outlet } from 'react-router-dom'
import { useStore } from '../../context/store-context'
import Eyebrow from '../ui/Eyebrow'
import Button from '../ui/Button'

const links = [
  { to: '/admin', label: 'Overview', end: true },
  { to: '/admin/products', label: 'Products' },
  { to: '/admin/orders', label: 'Orders' },
  { to: '/admin/customers', label: 'Customers' },
]
const navLink = ({ isActive }) =>
  `px-3.5 py-3 text-center text-xs sm:text-left ${isActive ? 'bg-[#4d1d2b] text-white' : 'text-[#cdbdc3] hover:bg-[#4d1d2b] hover:text-white'}`

// Sidebar + page area for the private admin pages. Sends visitors to the admin login if not signed in.
export default function AdminLayout() {
  const { isAdmin, adminLogout } = useStore()
  if (!isAdmin) return <Navigate to="/admin/login" />

  return (
    <div className="min-h-screen bg-[#f4f2f3]">
      <aside className="fixed inset-y-0 left-0 flex w-16 flex-col bg-ink px-2 py-[25px] text-white sm:w-[190px] sm:px-[18px] md:w-[235px]">
        <Link to="/admin" className="flex items-center justify-center gap-[9px] text-xs font-bold tracking-[.12em] sm:justify-start">
          <span className="grid size-[30px] place-items-center rounded-full bg-white font-serif text-[17px] italic text-ink">L</span>
          <span className="hidden sm:inline">LUMORA ADMIN</span>
        </Link>
        <nav className="mt-14 grid gap-[5px]">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={navLink}>
              <span className="hidden sm:inline">{l.label}</span>
              <span className="text-lg sm:hidden">•</span>
            </NavLink>
          ))}
        </nav>
        <button onClick={adminLogout} className="mt-auto border border-[#5d3341] p-[11px] text-xs text-[#cdbdc3]">
          <span className="hidden sm:inline">Log out</span>
          <span className="sm:hidden">⎋</span>
        </button>
      </aside>

      <div className="ml-16 p-4 sm:ml-[190px] sm:p-[20px_30px] md:ml-[235px] md:p-[30px_40px]">
        <header className="mb-[30px] flex items-center justify-between gap-4">
          <div>
            <Eyebrow>CONTROL CENTER</Eyebrow>
            <h2 className="my-[5px] font-serif text-2xl font-medium md:text-[32px]">Store management</h2>
          </div>
          <Button to="/" variant="outline" size="sm">View storefront</Button>
        </header>
        <Outlet />
      </div>
    </div>
  )
}
