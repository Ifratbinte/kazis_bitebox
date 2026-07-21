import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { productImages } from '@/data/productImages'

export function Hero() {
  return (
    <section className="overflow-hidden border-b border-border bg-gradient-to-b from-accent/10 to-background">
      <Container className="grid grid-cols-1 items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <Badge tone="primary">Frozen at peak flavor</Badge>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-secondary sm:text-5xl">
            Restaurant-quality momo and rolls, ready from your own freezer.
          </h1>
          <p className="mt-5 max-w-lg text-lg text-text-muted">
            Kazi's BiteBox hand-prepares chicken momo and chicken rolls and freezes them at
            their peak — so every steam or fry tastes freshly made, in under 20 minutes.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button as="a" href="/shop" size="lg">
              Order Now
            </Button>
            <Button as="a" href="/about" variant="outline" size="lg">
              Our Story
            </Button>
          </div>
        </div>

        <div className="relative mx-auto grid w-full max-w-md grid-cols-2 gap-4">
          <div className="aspect-square overflow-hidden rounded-card bg-surface shadow-md">
            <img src={productImages['chicken-momo']} alt="Chicken Momo" className="h-full w-full object-cover" />
          </div>
          <div className="mt-8 aspect-square overflow-hidden rounded-card bg-surface shadow-md">
            <img src={productImages['chicken-roll']} alt="Chicken Roll" className="h-full w-full object-cover" />
          </div>
        </div>
      </Container>
    </section>
  )
}
