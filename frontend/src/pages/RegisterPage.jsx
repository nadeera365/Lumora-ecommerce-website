import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useStore } from '../context/store-context'
import AuthPage from '../components/ui/AuthPage'
import FormField from '../components/ui/FormField'

export default function RegisterPage() {
  const { login } = useStore()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    if (form.password !== form.confirm) return alert('Passwords do not match')
    login({ name: form.name, email: form.email })
    navigate('/account')
  }

  return (
    <AuthPage
      title="Create your account"
      subtitle="Join LUMORA and keep your orders in one place."
      onSubmit={submit}
      footer={<>Already have an account? <Link to="/login">Login</Link></>}
    >
      <FormField label="Full name" required value={form.name} onChange={set('name')} />
      <FormField label="Email address" type="email" required value={form.email} onChange={set('email')} />
      <FormField label="Password" type="password" required value={form.password} onChange={set('password')} />
      <FormField label="Confirm password" type="password" required value={form.confirm} onChange={set('confirm')} />
    </AuthPage>
  )
}
