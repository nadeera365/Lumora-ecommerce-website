import Eyebrow from './Eyebrow'

export const headingClass = 'mt-2 font-serif text-[34px] font-semibold leading-[1.05] tracking-tight md:text-[43px]'

export default function PageHeading({ eyebrow, title, children }) {
  return (
    <div className="mb-8">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className={headingClass}>{title}</h1>
      {children && <p className="mt-3 text-muted">{children}</p>}
    </div>
  )
}
