import { useMemo, useState } from 'react'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { SearchBar } from '@/components/product/SearchBar'
import { CategoryFilter } from '@/components/product/CategoryFilter'
import { ProductCard } from '@/components/product/ProductCard'
import { EmptyState } from '@/components/ui/EmptyState'
import { OrderModal } from '@/components/product/OrderModal'
import { useOrderModal } from '@/hooks/useOrderModal'
import { products } from '@/data/products'

const CATEGORIES = ['All', ...Array.from(new Set(products.map((p) => p.category)))]

export function ShopPage() {
  const { activeProduct, openOrderModal, closeOrderModal } = useOrderModal()
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = category === 'All' || p.category === category
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [search, category])

  return (
    <Container className="py-16">
      <div className="anim-fade-up is-visible">
        <SectionTitle
          align="left"
          eyebrow="Shop"
          title="All Products"
          description="Every BiteBox product, ready to order in the pack size that fits you."
          className="mx-0"
        />
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between anim-fade-up is-visible" style={{ transitionDelay: '100ms' }}>
        <CategoryFilter categories={CATEGORIES} active={category} onChange={setCategory} />
        <SearchBar value={search} onChange={setSearch} />
      </div>

      {filtered.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product, index) => (
            <div
              key={product.id}
              className="anim-fade-up is-visible"
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <ProductCard product={product} onOrderClick={openOrderModal} />
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-8">
          <EmptyState
            title="No products match your search"
            description="Try a different keyword or clear the category filter."
          />
        </div>
      )}

      <OrderModal product={activeProduct} onClose={closeOrderModal} />
    </Container>
  )
}
