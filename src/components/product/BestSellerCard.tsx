import { Link } from 'react-router-dom'
import type { Product } from '@/types'
import { Badge } from '@/components/ui/Badge'
import { useCart } from '@/context/CartContext'
import { bestSellImages } from '@/data/productImages'
import { FiShoppingBag } from 'react-icons/fi'

interface BestSellerCardProps {
  product: Product
  onOrderClick: (product: Product) => void
}

export function BestSellerCard({ product, onOrderClick }: BestSellerCardProps) {
  const { addItem } = useCart()
  const image = bestSellImages[`best-${product.slug}`]
  const regularPack = product.packSizes.find((p) => p.label === 'Regular') ?? product.packSizes[0]

  function handleAddToCart() {
    addItem({
      productId: product.id,
      productName: product.name,
      productSlug: product.slug,
      packLabel: regularPack.label,
      packWeight: regularPack.weight,
      price: regularPack.price,
      quantity: 1,
      image,
    })
  }

  return (
    <div className="group card-hover flex overflow-hidden rounded-card border border-gold/20 bg-surface shadow-sm transition-all duration-300 hover:border-gold/40 hover:shadow-md hover:shadow-gold/5">
      <Link
        to={`/shop/${product.slug}`}
        className="relative block aspect-square w-36 shrink-0 overflow-hidden bg-accent/10 sm:w-44"
      >
        {image && (
          <img
            src={image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </Link>

      <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
        <div>
          <div className="flex items-start justify-between gap-2">
            <Link to={`/shop/${product.slug}`}>
              <h3 className="font-display text-base font-semibold text-secondary transition-colors duration-200 group-hover:text-primary sm:text-lg">
                {product.name}
              </h3>
            </Link>
            <Badge tone="gold" className="shrink-0 animate-bounce-in">
              Best Selling
            </Badge>
          </div>

          <div className="mt-2 gap-2">
            <span className="text-lg font-bold text-secondary">৳{regularPack.price}</span>
            <span className="text-xs text-text-muted">
              {regularPack.label} · {regularPack.weight}
            </span>
          </div>
        </div>

        <div className="mt-3 flex gap-2">
          <button
            type="button"
            onClick={handleAddToCart}
            className="btn-press flex flex-1 items-center justify-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-secondary transition-all duration-200 hover:border-primary/30 hover:bg-primary/5"
          >
            <FiShoppingBag size={15} />
            Add to Cart
          </button>
          <button
            type="button"
            onClick={() => onOrderClick(product)}
            className="btn-press rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  )
}
