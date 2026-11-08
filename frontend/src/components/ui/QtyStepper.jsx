import { MAX_QTY } from '../../config'

export default function QtyStepper({ value, onChange, min = 1, max = MAX_QTY }) {
  return (
    <div className="flex h-[51px] items-center border border-line bg-white">
      <button type="button" aria-label="Decrease quantity" className="h-full w-10" onClick={() => onChange(Math.max(min, value - 1))}>−</button>
      <b className="min-w-[25px] text-center">{value}</b>
      <button type="button" aria-label="Increase quantity" className="h-full w-10" onClick={() => onChange(Math.min(max, value + 1))}>+</button>
    </div>
  )
}
