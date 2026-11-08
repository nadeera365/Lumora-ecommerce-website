import { Link } from 'react-router-dom'
import Eyebrow from './Eyebrow'
import { headingClass } from './PageHeading'

export default function SectionHead({ eyebrow, title, linkTo, linkText }) {
  return (
    <div className="mb-[30px] flex items-end justify-between gap-5">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className={headingClass}>{title}</h2>
      </div>
      {linkTo && (
        <Link to={linkTo} className="whitespace-nowrap border-b border-ink pb-1 text-xs">{linkText} →</Link>
      )}
    </div>
  )
}
