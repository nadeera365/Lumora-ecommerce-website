import { Link } from 'react-router-dom'

// White table-like box for admin lists. Use AdminRow for each line.
export default function AdminPanel({ title, linkTo, linkText, action, children }) {
  return (
    <div className="border border-[#e7e2e4] bg-white">
      <div className="flex items-center justify-between border-b border-[#e9e4e6] p-5">
        <h3 className="text-[15px] font-semibold">{title}</h3>
        {linkTo && <Link to={linkTo} className="text-[11px] text-crimson">{linkText}</Link>}
        {action}
      </div>
      {children}
    </div>
  )
}

export function AdminRow({ cols = 'grid-cols-2 md:grid-cols-4', children }) {
  return (
    <div className={`grid items-center gap-[15px] border-b border-[#f0ecee] px-5 py-[15px] text-xs [&>span]:text-muted ${cols}`}>
      {children}
    </div>
  )
}
