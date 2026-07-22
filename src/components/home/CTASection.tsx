import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { cn } from '@/utils/cn'

export function CTASection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="py-16 sm:py-20" ref={ref}>
      <Container className={cn('anim-scale-in', isVisible && 'is-visible')}>
        <div className="rounded-card bg-primary px-6 py-14 text-center text-white sm:px-10">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Your freezer is one order away from dinner sorted.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/85">
            Stock up on Chicken Momo and Chicken Roll — ready whenever you are, in under 20 minutes.
          </p>
          <div className="mt-8">
            <Button as="a" href="/shop" variant="secondary" size="lg" className="btn-press">
              Order Now
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
