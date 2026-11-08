import Eyebrow from './Eyebrow'
import { headingClass } from './PageHeading'

// The white card used by login, register, forgot password and checkout.
export default function AuthCard({ eyebrow, title, subtitle, children, footer, wide = false }) {
  return (
    <div className={`w-full bg-white p-7 shadow-[0_15px_60px_rgba(36,16,26,.07)] sm:p-10 ${wide ? '' : 'max-w-[470px]'}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className={headingClass}>{title}</h1>
      {subtitle && <p className="mt-3 text-[13px] leading-[1.7] text-muted">{subtitle}</p>}
      {children}
      {footer && (
        <>
          <div className="my-[22px] text-center text-[11px] text-muted">or</div>
          <p className="text-center text-xs [&_a]:font-bold [&_a]:text-crimson">{footer}</p>
        </>
      )}
    </div>
  )
}
