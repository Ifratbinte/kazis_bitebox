import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ProductCard } from '@/components/product/ProductCard'
import type { Product } from '@/types'

interface ProductShowcaseProps {
  eyebrow?: string
  title: string
  description?: string
  products: Product[]
  onOrderClick: (product: Product) => void
}

export function ProductShowcase({
  eyebrow,
  title,
  description,
  products,
  onOrderClick,
}: ProductShowcaseProps) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
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
