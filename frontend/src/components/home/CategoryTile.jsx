import { Link } from 'react-router-dom'

const tones = ['bg-[#ecdfe2]', 'bg-[#e3e3e5]', 'bg-[#e8cdd3]', 'bg-[#d9d9db]']

export default function CategoryTile({ index, name, count }) {
  return (
    <Link to="/shop" className={`group relative min-h-[190px] p-[25px] transition duration-200 hover:-translate-y-1 ${tones[index % tones.length]}`}>
      <span className="text-[10px] text-crimson">0{index + 1}</span>
      <h3 className="mb-[5px] mt-11 font-serif text-[27px] font-medium">{name}</h3>
      <small className="text-muted">{count} products</small>
      <b className="absolute bottom-5 right-[22px] transition duration-300 group-hover:translate-x-1.5 group-hover:text-crimson">→</b>
    </Link>
  )
}
