import { useParams, Link, Navigate } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { ProductGallery } from '@/components/product/ProductGallery'
import { ProductCard } from '@/components/product/ProductCard'
import { OrderModal } from '@/components/product/OrderModal'
import { useOrderModal } from '@/hooks/useOrderModal'
import { getProductBySlug, getRelatedProducts } from '@/data/products'

export function ProductDetailsPage() {
  const { slug } = useParams<{ slug: string }>()
  const { activeProduct, openOrderModal, closeOrderModal } = useOrderModal()

  const product = slug ? getProductBySlug(slug) : undefined
  if (!product) return <Navigate to="/shop" replace />

  const related = getRelatedProducts(product.slug)
  const startingPrice = Math.min(...product.packSizes.map((p) => p.price))

  return (
    <Container className="py-16">
      <nav className="text-sm text-text-muted">
        <Link to="/shop" className="hover:text-primary">Shop</Link> / {product.name}
      </nav>

      <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <ProductGallery category={product.category} imageCount={product.images.length} />

        <div>
          {product.isBestSeller && <Badge tone="primary">Best Seller</Badge>}
          <h1 className="mt-3 font-display text-3xl font-semibold text-secondary">{product.name}</h1>
          <p className="mt-2 text-text-muted">{product.tagline}</p>
          <p className="mt-4 text-secondary/90">{product.description}</p>

          <p className="mt-6 font-display text-2xl font-semibold text-secondary">
            From ৳{startingPrice}
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-secondary/5 px-3 py-1 text-secondary">
              Shelf life: {product.shelfLife}
            </span>
          </div>

          <Button onClick={() => openOrderModal(product)} size="lg" className="mt-8">
            Order Now
          </Button>

          <div className="mt-10 space-y-6 border-t border-border pt-6">
            <div>
              <h2 className="font-display text-lg font-semibold text-secondary">Ingredients</h2>
              <p className="mt-1 text-sm text-text-muted">{product.ingredients.join(', ')}</p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-secondary">Storage</h2>
              <p className="mt-1 text-sm text-text-muted">{product.storage}</p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-secondary">Cooking Instructions</h2>
              <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-text-muted">
                {product.cookingInstructions.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-secondary">Nutrition</h2>
              <p className="mt-1 text-sm text-text-muted">Nutrition information coming soon.</p>
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-20">
          <h2 className="font-display text-2xl font-semibold text-secondary">You might also like</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} onOrderClick={openOrderModal} />
            ))}
          </div>
        </div>
      )}

      <OrderModal product={activeProduct} onClose={closeOrderModal} />
    </Container>
  )
}
