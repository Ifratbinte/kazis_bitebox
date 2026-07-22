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
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <svg className="absolute -top-10 -right-10 h-64 w-64 text-gold/10" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="100" fill="currentColor" />
        </svg>
        {/* <svg className="absolute -bottom-20 -left-20 h-80 w-80 text-gold/5" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="100" fill="currentColor" />
        </svg> */}
        <svg className="absolute top-1/3 left-1/4 h-6 w-6 text-gold/20" viewBox="0 0 12 12">
          <circle cx="6" cy="6" r="6" fill="currentColor" />
        </svg>
        <svg className="absolute top-1/3 right-1/3 h-2 w-2 text-gold/15" viewBox="0 0 8 8">
          <circle cx="4" cy="4" r="4" fill="currentColor" />
        </svg>
        <svg className="absolute bottom-1/4 right-1/4 h-4 w-4 text-gold/15" viewBox="0 0 16 16">
          <circle cx="8" cy="8" r="8" fill="currentColor" />
        </svg>
      </div>

      <Container className="relative">
        <SectionTitle
          eyebrow="How it works"
          title="From order to plate in four steps"
        />
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number}>
              <span className="font-display text-3xl font-semibold text-gold">{step.number}</span>
              <h3 className="mt-2 font-display text-lg font-semibold text-secondary">{step.title}</h3>
              <p className="mt-2 text-sm text-text-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
