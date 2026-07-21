import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export function CTASection() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="rounded-card bg-primary px-6 py-14 text-center text-white sm:px-10">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">
          Your freezer is one order away from dinner sorted.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-white/85">
          Stock up on Chicken Momo and Chicken Roll — ready whenever you are, in under 20 minutes.
        </p>
        <div className="mt-8">
          <Button as="a" href="/shop" variant="secondary" size="lg">
            Order Now
          </Button>
        </div>
      </Container>
    </section>
  )
}
