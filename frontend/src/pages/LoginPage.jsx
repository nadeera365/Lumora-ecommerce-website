import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useStore } from '../context/store-context'
import AuthPage from '../components/ui/AuthPage'
import FormField from '../components/ui/FormField'

export default function LoginPage() {
  const { login } = useStore()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submit = (e) => {
    e.preventDefault()
    login({ name: email.split('@')[0] || 'Customer', email })
    navigate('/')
  }

  return (
    <AuthPage
      title="Welcome back"
      subtitle="Sign in to manage your orders and continue shopping."
      onSubmit={submit}
      footer={<>Don't have an account? <Link to="/register">Create account</Link></>}
    >
      <FormField label="Email address" type="email" required placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
      <FormField label="Password" type="password" required placeholder="Your password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Link to="/forgot-password" className="text-xs text-muted hover:text-crimson">Forgot password?</Link>
    </AuthPage>
  )
}
