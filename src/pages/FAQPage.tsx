import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { FAQAccordion } from '@/components/shared/FAQAccordion'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { cn } from '@/utils/cn'
import { faqs } from '@/data/faqs'

export function FAQPage() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div ref={ref}>
      <Container className="max-w-3xl py-16">
        <div className={cn('anim-fade-up', isVisible && 'is-visible')}>
          <SectionTitle
            eyebrow="Support"
            title="Frequently Asked Questions"
            description="Everything you need to know before your first order — and after."
          />
        </div>
        <div className={cn('mt-10 anim-scale-in', isVisible && 'is-visible')} style={{ transitionDelay: '200ms' }}>
          <FAQAccordion items={faqs} />
        </div>
      </Container>
    </div>
  )
}
