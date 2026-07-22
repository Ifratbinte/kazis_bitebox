import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ProductCard } from '@/components/product/ProductCard'
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
  return (
    <section
      className={cn(
        'relative overflow-hidden py-16 sm:py-20',
        variant === 'bestSeller' && 'bg-accent/5',
      )}
    >
      {variant === 'bestSeller' && (
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <svg className="absolute -top-16 -left-16 h-72 w-72 text-primary/5" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="100" fill="currentColor" />
          </svg>
          <svg className="absolute -bottom-10 -right-10 h-56 w-56 text-accent/10" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="100" fill="currentColor" />
          </svg>
          <svg className="absolute top-1/4 right-1/6 h-3 w-3 text-primary/15" viewBox="0 0 12 12">
            <circle cx="6" cy="6" r="6" fill="currentColor" />
          </svg>
          <svg className="absolute bottom-1/3 left-1/5 h-2.5 w-2.5 text-accent/20" viewBox="0 0 10 10">
            <circle cx="5" cy="5" r="5" fill="currentColor" />
          </svg>
        </div>
      )}

      <Container className="relative">
        <SectionTitle eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onOrderClick={onOrderClick} />
          ))}
        </div>
      </Container>
    </section>
  )
}
