import Eyebrow from '../ui/Eyebrow'

// White box on the right of cart and checkout. Put SummaryRow lines inside.
export default function SummaryCard({ eyebrow, children }) {
  return (
    <aside className="self-start bg-white p-[25px] lg:sticky lg:top-[135px]">
      <Eyebrow>{eyebrow}</Eyebrow>
      {children}
    </aside>
  )
}

export function SummaryRow({ label, value, total = false }) {
  return (
    <div className={`flex justify-between py-[11px] ${total ? 'border-t border-line text-[15px] font-bold' : 'text-xs'}`}>
      <span>{label}</span>
      <b>{value}</b>
    </div>
  )
}
