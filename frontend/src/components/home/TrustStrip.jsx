const items = [
  { title: 'Secure checkout', note: 'Protected payment flow' },
  { title: 'Islandwide delivery', note: 'Carefully packed orders' },
  { title: 'Easy returns', note: 'Friendly support' },
]

export default function TrustStrip() {
  return (
    <div className="mx-auto mb-20 mt-2.5 grid max-w-[1240px] gap-5 border-y border-line px-6 py-[25px] sm:grid-cols-3">
      {items.map((it, k) => (
        <div key={it.title} className="flex gap-4">
          <b className="text-[11px] text-crimson">0{k + 1}</b>
          <span>
            <strong className="block text-xs">{it.title}</strong>
            <small className="mt-1 block text-[11px] text-muted">{it.note}</small>
          </span>
        </div>
      ))}
    </div>
  )
}
