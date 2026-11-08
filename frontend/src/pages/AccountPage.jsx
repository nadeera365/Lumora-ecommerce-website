import { Link, Navigate } from 'react-router-dom'
import { useStore } from '../context/store-context'
import Section from '../components/ui/Section'
import PageHeading from '../components/ui/PageHeading'

const tile = 'border border-line bg-white p-[25px] text-left'
const note = 'mt-2 block text-xs text-muted'

export default function AccountPage() {
  const { user, logout } = useStore()
  if (!user) return <Navigate to="/login" />

  return (
    <Section>
      <PageHeading eyebrow="MY ACCOUNT" title={`Hello, ${user.name}.`} />
      <div className="grid gap-[15px] sm:grid-cols-2">
        <Link to="/orders" className={tile}><b>My orders</b><span className={note}>View and track purchases →</span></Link>
        <Link to="/tracking" className={tile}><b>Track order</b><span className={note}>Check delivery status →</span></Link>
        <div className={tile}><b>Account details</b><span className={note}>{user.email}</span></div>
        <button onClick={logout} className={`${tile} font-bold`}>Log out</button>
      </div>
    </Section>
  )
}
