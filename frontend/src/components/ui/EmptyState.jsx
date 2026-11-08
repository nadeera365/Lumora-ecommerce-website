import Button from './Button'

export default function EmptyState({ title, actionTo, actionText }) {
  return (
    <div className="px-5 py-24 text-center">
      <h2 className="mb-6 font-serif text-3xl font-medium">{title}</h2>
      {actionTo && <Button to={actionTo}>{actionText}</Button>}
    </div>
  )
}
