export default function FormField({ label, ...inputProps }) {
  return (
    <label className="grid gap-[7px] text-[11px] font-semibold">
      {label}
      <input
        {...inputProps}
        className="h-[45px] w-full border border-line bg-[#fcfafa] px-[13px] outline-none focus:border-crimson"
      />
    </label>
  )
}
