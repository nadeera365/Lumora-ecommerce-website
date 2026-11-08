import { Link } from 'react-router-dom'

const base = 'inline-flex items-center justify-center gap-3 text-xs font-bold transition duration-200'
const variants = {
  primary: 'bg-crimson text-white hover:-translate-y-px hover:bg-ink',
  outline: 'border border-ink bg-white text-ink hover:bg-ink hover:text-white',
  quiet: 'text-muted hover:text-ink',
}
const sizes = { sm: 'px-3.5 py-2.5', md: 'px-5 py-3.5', lg: 'px-7 py-[17px]' }

// Pass `to` to get a link, otherwise you get a normal button.
export default function Button({ to, variant = 'primary', size = 'md', full = false, className = '', children, ...rest }) {
  const classes = [base, variants[variant], sizes[size], full && 'w-full', className].filter(Boolean).join(' ')
  return to ? (
    <Link to={to} className={classes} {...rest}>{children}</Link>
  ) : (
    <button className={classes} {...rest}>{children}</button>
  )
}
