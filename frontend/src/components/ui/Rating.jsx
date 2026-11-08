export default function Rating({ stars, count, label = '' }) {
  return (
    <div className="text-[10px] tracking-wider text-crimson">
      {'★'.repeat(stars)}{'☆'.repeat(5 - stars)}
      <i className="ml-1 not-italic tracking-normal text-muted">{label ? `${count} ${label}` : `(${count})`}</i>
    </div>
  )
}
