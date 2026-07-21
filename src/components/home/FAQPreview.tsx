import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { FAQAccordion } from '@/components/shared/FAQAccordion'
import { faqs } from '@/data/faqs'

export function FAQPreview() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <Container className="max-w-3xl">
        <SectionTitle eyebrow="Questions" title="Good to know before you order" />
        <div className="mt-8">
          <FAQAccordion items={faqs.slice(0, 4)} />
        </div>
        <p className="mt-6 text-center">
          <Link to="/faq" className="text-sm font-semibold text-primary hover:underline">
            See all FAQs →
          </Link>
        </p>
      </Container>
    </section>
  )
}
