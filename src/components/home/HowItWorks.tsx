import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'

const steps = [
  {
    number: '01',
    title: 'Choose your pack',
    description: 'Pick Chicken Momo or Chicken Roll and the pack size that fits your household.',
  },
  {
    number: '02',
    title: 'Send your order',
    description: "Tap Order Now — it opens Messenger or WhatsApp with your order already filled in.",
  },
  {
    number: '03',
    title: 'We confirm & deliver',
    description: 'We confirm availability and delivery time, then get it to your freezer, still frozen.',
  },
  {
    number: '04',
    title: 'Steam or fry, straight from frozen',
    description: 'No thawing needed — just follow the pack instructions and it\'s ready in minutes.',
  },
]

export function HowItWorks() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionTitle
          eyebrow="How it works"
          title="From order to plate in four steps"
        />
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number}>
              <span className="font-display text-3xl font-semibold text-accent">{step.number}</span>
              <h3 className="mt-2 font-display text-lg font-semibold text-secondary">{step.title}</h3>
              <p className="mt-2 text-sm text-text-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
