import { Link } from 'react-router-dom'
import type { Product } from '@/types'
import { Badge } from '@/components/ui/Badge'
import { bestSellImages, productImages } from '@/data/productImages'

interface ProductCardProps {
  product: Product
  onOrderClick: (product: Product) => void
}

export function ProductCard({ product, onOrderClick }: ProductCardProps) {
  const startingPrice = Math.min(...product.packSizes.map((p) => p.price))
  const image = product.isBestSeller
    ? bestSellImages[`best-${product.slug}`] ?? productImages[product.slug]
    : productImages[product.slug]

  return (
    <div className="group flex flex-col overflow-hidden rounded-card border border-border bg-surface shadow-sm transition-shadow hover:shadow-lg">
      <Link to={`/shop/${product.slug}`} className="relative block aspect-square overflow-hidden bg-accent/10">
        <img
          src={image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.isBestSeller && (
          <Badge tone="white" className="absolute left-4 top-4">
            Best Seller
          </Badge>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <Link to={`/shop/${product.slug}`}>
          <h3 className="font-display text-lg font-semibold text-secondary group-hover:text-primary">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm text-text-muted">{product.tagline}</p>

        <div className="mt-4 flex items-center justify-between">
          <p className="font-semibold text-secondary">
            From ৳{startingPrice}
          </p>
          <button
            type="button"
            onClick={() => onOrderClick(product)}
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  )
}
