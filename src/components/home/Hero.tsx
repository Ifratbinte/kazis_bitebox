import { useState, useEffect, useCallback } from 'react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { productImages } from '@/data/productImages'
import { products } from '@/data/products'
import { cn } from '@/utils/cn'

export function Hero() {
  const [active, setActive] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [imageKey, setImageKey] = useState(0)

  const next = useCallback(() => {
    setActive((i) => (i + 1) % products.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const id = setInterval(next, 4000)
    return () => clearInterval(id)
  }, [next, isPaused])

  const product = products[active]

  useEffect(() => {
    setImageKey((k) => k + 1)
  }, [active])

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-accent/10 to-background" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      {/* Decorative Shapes with float animation */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg
          className="absolute -right-32 -top-32 h-96 w-96 text-gold/10 animate-float"
          viewBox="0 0 200 200"
        >
          <circle cx="100" cy="100" r="100" fill="currentColor" />
        </svg>

        <svg
          className="absolute -bottom-20 -left-20 h-72 w-72 text-gold/15 animate-float-slow"
          viewBox="0 0 200 200"
        >
          <circle cx="100" cy="100" r="100" fill="currentColor" />
        </svg>

        <svg className="absolute left-1/4 top-1/3 h-4 w-4 text-gold/20 animate-float-delay" viewBox="0 0 16 16">
          <circle cx="8" cy="8" r="8" fill="currentColor" />
        </svg>
        <svg className="absolute bottom-1/4 right-1/3 h-3 w-3 text-gold/25 animate-float" viewBox="0 0 12 12">
          <circle cx="6" cy="6" r="6" fill="currentColor" />
        </svg>
        <svg className="absolute left-1/2 top-1/4 h-2 w-2 text-gold/15 animate-float-slow" viewBox="0 0 8 8">
          <circle cx="4" cy="4" r="4" fill="currentColor" />
        </svg>

        <svg
          className="absolute bottom-0 left-0 w-full text-background/50"
          viewBox="0 0 1440 120"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L48 108C96 96 192 72 288 66C384 60 480 72 576 78C672 84 768 84 864 78C960 72 1056 60 1152 60C1248 60 1344 72 1392 78L1440 84V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <Container className="relative z-10 grid grid-cols-1 items-center gap-10 pt-[8.5rem] pb-16 sm:pt-[10rem] sm:pb-20 lg:grid-cols-2 lg:pt-[12rem] lg:pb-28">
        <div>
          <span className="hero-badge">
            <Badge tone="gold">Frozen at peak flavor</Badge>
          </span>
          <h1 className="hero-title mt-5 font-display text-4xl font-semibold leading-tight text-secondary sm:text-5xl">
            Restaurant-quality momo and rolls, ready from your own freezer.
          </h1>
          <p className="hero-subtitle mt-5 max-w-lg text-lg text-text-muted">
            Kazi's BiteBox hand-prepares chicken momo and chicken rolls and freezes them at
            their peak — so every steam or fry tastes freshly made, in under 20 minutes.
          </p>
          <div className="hero-buttons mt-8 flex flex-wrap gap-4">
            <Button as="a" href="/shop" size="md" className="btn-press">
              Order Now
            </Button>
            <Button as="a" href="/about" variant="outline" size="md" className="btn-press">
              Our Story
            </Button>
          </div>
        </div>

        <div className="hero-image relative mx-auto w-full max-w-md">
          <div className="aspect-square overflow-hidden rounded-card bg-surface shadow-md animate-pulse-glow">
            <img
              key={imageKey}
              src={productImages[product.id]}
              alt={product.name}
              className="h-full w-full object-cover animate-fade-in"
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
                  'h-2.5 w-2.5 rounded-full transition-all duration-300',
                  active === i ? 'bg-primary w-6' : 'bg-border hover:bg-primary/40',
                )}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
