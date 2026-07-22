import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { FAQAccordion } from '@/components/shared/FAQAccordion'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { cn } from '@/utils/cn'
import { faqs } from '@/data/faqs'

export function FAQPreview() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="bg-surface py-16 sm:py-20" ref={ref}>
      <Container className="max-w-3xl">
        <div className={cn('anim-fade-up', isVisible && 'is-visible')}>
          <SectionTitle eyebrow="Questions" title="Good to know before you order" />
        </div>
        <div className={cn('mt-8 anim-fade-up', isVisible && 'is-visible')} style={{ transitionDelay: '200ms' }}>
          <FAQAccordion items={faqs.slice(0, 4)} />
        </div>
        <p className={cn('mt-6 text-center anim-fade-up', isVisible && 'is-visible')} style={{ transitionDelay: '400ms' }}>
          <Link to="/faq" className="text-sm font-semibold text-primary transition-all duration-200 hover:underline hover:tracking-wide">
            See all FAQs →
          </Link>
        </p>
      </Container>
    </section>
  )
}
