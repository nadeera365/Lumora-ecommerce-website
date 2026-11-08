import Section from '../components/ui/Section'
import PageHeading from '../components/ui/PageHeading'
import Button from '../components/ui/Button'

const steps = ['Order placed', 'Preparing', 'On the way', 'Delivered']

export default function TrackingPage() {
  return (
    <Section>
      <PageHeading eyebrow="ORDER TRACKING" title="Where is your order?" />
      <div className="my-[30px] flex max-w-[600px]">
        <input aria-label="Order number" placeholder="Enter order number" className="flex-1 border border-line p-3.5" />
        <Button>Track</Button>
      </div>
      <ol className="max-w-[650px]">
        {steps.map((step, i) => (
          <li key={step} className="flex gap-[18px] border-b border-line py-[22px]">
            <b className={`grid size-8 shrink-0 place-items-center rounded-full ${i === 0 ? 'bg-crimson text-white' : 'bg-[#eee]'}`}>{i === 0 ? '✓' : i + 1}</b>
            <span>
              <strong className="block">{step}</strong>
              <small className="mt-1 block text-[11px] text-muted">
                {i === 0 ? 'Your order has been received' : 'We will update you as your order moves.'}
              </small>
            </span>
          </li>
        ))}
      </ol>
    </Section>
  )
}
