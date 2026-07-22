import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { TestimonialSlider } from '@/components/home/TestimonialSlider'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { cn } from '@/utils/cn'
import { testimonials } from '@/data/testimonials'

export function Testimonials() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="bg-surface py-16 sm:py-20" ref={ref}>
      <Container>
        <div className={cn('anim-fade-up', isVisible && 'is-visible')}>
          <SectionTitle eyebrow="Customer stories" title="What Dhaka is saying about BiteBox" />
        </div>
        <div className={cn('mt-10 anim-fade-up', isVisible && 'is-visible')} style={{ transitionDelay: '200ms' }}>
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </Container>
    </section>
  )
}
