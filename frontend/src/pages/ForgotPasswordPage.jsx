import { Link } from 'react-router-dom'
import AuthPage from '../components/ui/AuthPage'
import FormField from '../components/ui/FormField'

export default function ForgotPasswordPage() {
  return (
    <AuthPage
      title="Reset your password"
      subtitle="Enter your email and we'll send reset instructions."
      onSubmit={(e) => { e.preventDefault(); alert('Reset link will be connected to the backend.') }}
      footer={<Link to="/login">← Back to login</Link>}
    >
      <FormField label="Email address" type="email" required placeholder="you@example.com" />
    </AuthPage>
  )
}
