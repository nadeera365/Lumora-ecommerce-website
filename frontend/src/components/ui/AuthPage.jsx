import AuthCard from './AuthCard'
import Button from './Button'

// Full page with a centred card and a form. Login, Register and Forgot password all use this.
export default function AuthPage({ title, subtitle, onSubmit, children, footer }) {
  return (
    <main className="grid min-h-[calc(100vh-112px)] place-items-center px-5 py-[60px]">
      <AuthCard eyebrow="LUMORA ACCOUNT" title={title} subtitle={subtitle} footer={footer}>
        <form onSubmit={onSubmit} className="mt-[25px] grid gap-[15px]">
          {children}
          <Button size="lg" full>Continue →</Button>
        </form>
      </AuthCard>
    </main>
  )
}
