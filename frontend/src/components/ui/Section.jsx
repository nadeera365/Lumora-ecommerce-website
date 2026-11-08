// Centers page content and gives it the standard width and spacing.
export default function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`mx-auto max-w-[1240px] px-[18px] py-12 sm:px-6 md:py-[72px] ${className}`}>
      {children}
    </section>
  )
}
