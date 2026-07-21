import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { TestimonialCard } from '@/components/home/TestimonialCard'
import { testimonials } from '@/data/testimonials'

export function Testimonials() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <Container>
        <SectionTitle eyebrow="Customer stories" title="What Dhaka is saying about BiteBox" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </Container>
    </section>
  )
}
