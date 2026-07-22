import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { TestimonialSlider } from '@/components/home/TestimonialSlider'
import { testimonials } from '@/data/testimonials'

export function Testimonials() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <Container>
        <SectionTitle eyebrow="Customer stories" title="What Dhaka is saying about BiteBox" />
        <div className="mt-10">
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </Container>
    </section>
  )
}
