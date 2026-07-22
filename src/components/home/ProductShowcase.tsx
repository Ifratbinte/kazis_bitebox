import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ProductCard } from '@/components/product/ProductCard'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import type { Product } from '@/types'
import { cn } from '@/utils/cn'

interface ProductShowcaseProps {
  eyebrow?: string
  title: string
  description?: string
  products: Product[]
  onOrderClick: (product: Product) => void
  variant?: 'default' | 'bestSeller'
}

export function ProductShowcase({
  eyebrow,
  title,
  description,
  products,
  onOrderClick,
  variant = 'default',
}: ProductShowcaseProps) {
  const { ref: sectionRef, isVisible } = useScrollReveal()

  return (
    <section
      ref={sectionRef}
      className={cn(
        'relative overflow-hidden py-16 sm:py-20',
        variant === 'bestSeller' && 'bg-accent/5',
      )}
    >
      {variant === 'bestSeller' && (
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <svg className="absolute -top-16 -left-16 h-72 w-72 text-gold/10 animate-float-slow" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="100" fill="currentColor" />
          </svg>
          <svg className="absolute -bottom-10 -right-10 h-56 w-56 text-gold/15 animate-float" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="100" fill="currentColor" />
          </svg>
          <svg className="absolute top-1/4 right-1/6 h-3 w-3 text-gold/20 animate-float-delay" viewBox="0 0 12 12">
            <circle cx="6" cy="6" r="6" fill="currentColor" />
          </svg>
          <svg className="absolute bottom-1/3 left-1/5 h-2.5 w-2.5 text-gold/25 animate-float" viewBox="0 0 10 10">
            <circle cx="5" cy="5" r="5" fill="currentColor" />
          </svg>
        </div>
      )}

      <Container className="relative">
        <div className={cn('anim-fade-up', isVisible && 'is-visible')}>
          <SectionTitle eyebrow={eyebrow} title={title} description={description} />
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={cn('anim-fade-up', isVisible && 'is-visible')}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <ProductCard product={product} onOrderClick={onOrderClick} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
