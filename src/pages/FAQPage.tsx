import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { FAQAccordion } from '@/components/shared/FAQAccordion'
import { faqs } from '@/data/faqs'

export function FAQPage() {
  return (
    <Container className="max-w-3xl py-16">
      <SectionTitle
        eyebrow="Support"
        title="Frequently Asked Questions"
        description="Everything you need to know before your first order — and after."
      />
      <div className="mt-10">
        <FAQAccordion items={faqs} />
      </div>
    </Container>
  )
}
