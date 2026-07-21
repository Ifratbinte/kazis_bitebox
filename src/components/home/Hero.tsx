import { useState, useEffect, useCallback } from 'react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { productImages } from '@/data/productImages'
import { products } from '@/data/products'
import { cn } from '@/utils/cn'

export function Hero() {
  const [active, setActive] = useState(0)

  const next = useCallback(() => {
    setActive((i) => (i + 1) % products.length)
  }, [])

  useEffect(() => {
    const id = setInterval(next, 4000)
    return () => clearInterval(id)
  }, [next])

  const product = products[active]

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
            <Button as="a" href="/shop" size="md">
              Order Now
            </Button>
            <Button as="a" href="/about" variant="outline" size="md">
              Our Story
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="aspect-square overflow-hidden rounded-card bg-surface shadow-md transition-opacity duration-500">
            <img
              key={product.id}
              src={productImages[product.id]}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mt-6 text-center">
            <h2 className="font-display text-2xl font-semibold text-secondary">
              {product.name}
            </h2>
            <p className="mt-1 text-text-muted">{product.tagline}</p>
          </div>

          <div className="mt-4 flex justify-center gap-2">
            {products.map((p, i) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`View ${p.name}`}
                className={cn(
                  'h-2.5 w-2.5 rounded-full transition-colors',
                  active === i ? 'bg-primary' : 'bg-border',
                )}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
