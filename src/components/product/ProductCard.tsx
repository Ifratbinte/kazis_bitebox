import { Link } from 'react-router-dom'
import type { Product } from '@/types'
import { Badge } from '@/components/ui/Badge'
import { useCart } from '@/context/CartContext'
import { bestSellImages, productImages } from '@/data/productImages'
import { FiShoppingBag } from 'react-icons/fi'

interface ProductCardProps {
  product: Product
  onOrderClick: (product: Product) => void
}

export function ProductCard({ product, onOrderClick }: ProductCardProps) {
  const { addItem } = useCart()
  const startingPrice = Math.min(...product.packSizes.map((p) => p.price))
  const defaultPack = product.packSizes[0]
  const image = product.isBestSeller
    ? bestSellImages[`best-${product.slug}`] ?? productImages[product.slug]
    : productImages[product.slug]

  function handleAddToCart() {
    addItem({
      productId: product.id,
      productName: product.name,
      productSlug: product.slug,
      packLabel: defaultPack.label,
      packWeight: defaultPack.weight,
      price: defaultPack.price,
      quantity: 1,
      image,
    })
  }

  return (
    <div className="group card-hover flex flex-col overflow-hidden rounded-card border border-border bg-surface shadow-sm hover:border-primary/20">
      <Link to={`/shop/${product.slug}`} className="relative block aspect-square overflow-hidden bg-accent/10">
        <img
          src={image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
        {product.isBestSeller && (
          <Badge tone="white" className="absolute left-4 top-4 animate-bounce-in">
            Best Seller
          </Badge>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <Link to={`/shop/${product.slug}`}>
          <h3 className="font-display text-lg font-semibold text-secondary transition-colors duration-200 group-hover:text-primary">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm text-text-muted">{product.tagline}</p>

        <div className="mt-4 flex items-center justify-between">
          <p className="font-semibold text-secondary">
            From ৳{startingPrice}
          </p>
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
