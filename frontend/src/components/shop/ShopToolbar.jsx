const GENDERS = ['All', 'Men', 'Women', 'Unisex']
const select = 'border border-line bg-white px-3 py-2 text-[11px]'

export default function ShopToolbar({ gender, onGender, categories, category, onCategory, sort, onSort }) {
  return (
    <div className="mb-[22px] flex flex-col justify-between gap-5 border-y border-line py-[13px] md:flex-row">
      <div className="flex flex-wrap">
        {GENDERS.map((g) => (
          <button
            key={g}
            onClick={() => onGender(g)}
            className={`px-3 py-2 text-xs ${gender === g ? 'bg-crimson text-white' : 'text-muted hover:text-ink'}`}
          >
            {g}
          </button>
        ))}
      </div>
      <div className="flex gap-[7px]">
        <select aria-label="Category" value={category} onChange={(e) => onCategory(e.target.value)} className={select}>
          {categories.map((c) => <option key={c}>{c}</option>)}
        </select>
        <select aria-label="Sort" value={sort} onChange={(e) => onSort(e.target.value)} className={select}>
          <option value="featured">Featured</option>
          <option value="low">Price: Low to high</option>
          <option value="high">Price: High to low</option>
        </select>
      </div>
    </div>
  )
}
