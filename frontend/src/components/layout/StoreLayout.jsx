import { Outlet } from 'react-router-dom'
import TopBar from './TopBar'
import Header from './Header'
import Footer from './Footer'

// Shared frame for every customer page: top bar, header, the page, footer.
export default function StoreLayout({ withFooter = true }) {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      <Outlet />
      {withFooter && <Footer />}
    </div>
  )
}
