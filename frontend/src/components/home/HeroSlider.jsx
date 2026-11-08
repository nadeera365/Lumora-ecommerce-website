import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// To change the banners, edit this list. `bg` = left and right fill colours, `f` = edge fade width.
const BANNERS = [
  { src: '/images/banners/banner-essentials.jpg', alt: 'Essential clothing, up to 30% off', to: '/shop', bg: ['#d3c5b7', '#8e7762'], f: '3%' },
  { src: '/images/banners/banner-mens.jpg', alt: "Exclusive men's collection", to: '/shop?gender=Men', bg: ['#5d1021', '#521020'], f: '1.5%' },
  { src: '/images/banners/banner-upgrade.jpg', alt: 'Upgrade your look with the latest trends', to: '/shop?gender=Women', bg: ['#a5a3a3', '#cbcbcc'], f: '3%' },
]
const AUTO_MS = 5500

const fade = (f) => {
  const g = `linear-gradient(90deg,transparent,#000 ${f},#000 calc(100% - ${f}),transparent)`
  return { WebkitMaskImage: g, maskImage: g }
}

export default function HeroSlider() {
  const [i, setI] = useState(0)
  const n = BANNERS.length

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setTimeout(() => setI((x) => (x + 1) % n), AUTO_MS)
    return () => clearTimeout(t)
  }, [i, n])

  const arrow = 'absolute top-1/2 z-10 hidden size-[42px] -translate-y-1/2 place-items-center rounded-full bg-white/90 text-2xl leading-none text-ink transition hover:bg-crimson hover:text-white md:grid'

  return (
    <section aria-roledescription="carousel" aria-label="Featured collections" className="relative h-[clamp(220px,42vw,500px)] overflow-hidden bg-ink">
      {BANNERS.map((b, k) => {
        const active = k === i
        return (
          <Link
            key={b.src}
            to={b.to}
            aria-hidden={!active}
            tabIndex={active ? 0 : -1}
            style={{ background: `linear-gradient(90deg,${b.bg[0]} 50%,${b.bg[1]} 50%)` }}
            className={`absolute inset-0 flex justify-center transition-opacity duration-[900ms] focus-visible:outline-3 focus-visible:-outline-offset-3 focus-visible:outline-crimson motion-reduce:transition-none ${active ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
          >
            <img
              src={b.src}
              alt={b.alt}
              style={fade(b.f)}
              fetchPriority={k === 0 ? 'high' : 'auto'}
              className={`h-full w-auto max-w-full object-contain transition-transform duration-[6500ms] ease-out motion-reduce:transition-none ${active ? 'scale-100' : 'scale-105'}`}
            />
          </Link>
        )
      })}

      <button className={`${arrow} left-[18px]`} onClick={() => setI((i - 1 + n) % n)} aria-label="Previous banner">‹</button>
      <button className={`${arrow} right-[18px]`} onClick={() => setI((i + 1) % n)} aria-label="Next banner">›</button>

      <div className="absolute inset-x-0 bottom-3.5 z-10 flex justify-center gap-2">
        {BANNERS.map((b, k) => (
          <button
            key={b.src}
            onClick={() => setI(k)}
            aria-label={`Show banner ${k + 1}`}
            className={`relative h-3 overflow-hidden rounded-md bg-white/70 ring-1 ring-ink/20 transition-all duration-300 ${k === i ? 'w-11' : 'w-3'}`}
          >
            {k === i && <i className="absolute inset-0 origin-left animate-fill bg-crimson motion-reduce:animate-none" />}
          </button>
        ))}
      </div>
    </section>
  )
}
