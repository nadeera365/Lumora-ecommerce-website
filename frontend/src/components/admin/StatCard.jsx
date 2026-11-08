export default function StatCard({ label, value, note }) {
  return (
    <div className="border border-[#e7e2e4] bg-white p-[22px]">
      <small className="block text-[10px] text-muted">{label}</small>
      <strong className="my-2.5 block text-2xl">{value}</strong>
      <span className="block text-[10px] text-[#4d775b]">{note}</span>
    </div>
  )
}
