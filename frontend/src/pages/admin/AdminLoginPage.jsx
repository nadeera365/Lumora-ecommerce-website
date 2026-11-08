import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../../context/store-context'
import Eyebrow from '../../components/ui/Eyebrow'
import FormField from '../../components/ui/FormField'
import Button from '../../components/ui/Button'

export default function AdminLoginPage() {
  const { adminLogin } = useStore()
  const navigate = useNavigate()
  const [email, setEmail] = useState('admin@lumora.lk')
  const [password, setPassword] = useState('')

  const submit = (e) => {
    e.preventDefault()
    adminLogin()
    navigate('/admin')
  }

  return (
    <main className="grid min-h-screen place-items-center bg-[#1b0b13] p-[30px]">
      <div className="w-full max-w-[430px] bg-white p-[42px]">
        <span className="mb-[30px] grid size-[45px] place-items-center rounded-full bg-crimson font-serif text-2xl italic text-white">L</span>
        <Eyebrow>PRIVATE ADMIN AREA</Eyebrow>
        <h1 className="mt-2 font-serif text-[34px] font-semibold leading-[1.05]">Admin sign in</h1>
        <p className="mt-3 text-[13px] leading-[1.7] text-muted">This area is not linked from the customer storefront.</p>
        <form onSubmit={submit} className="mt-[25px] grid gap-[15px]">
          <FormField label="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <FormField label="Password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button size="lg" full>Sign in to dashboard</Button>
        </form>
      </div>
    </main>
  )
}
