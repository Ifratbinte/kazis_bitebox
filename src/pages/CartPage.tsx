import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Button } from '@/components/ui/Button'
import { EmptyState } from '@/components/ui/EmptyState'
import { useCart } from '@/context/CartContext'
import { FiTrash2, FiPlus, FiMinus, FiShoppingBag } from 'react-icons/fi'

export function CartPage() {
  const { items, removeItem, updateQuantity, itemCount, total } = useCart()

  if (items.length === 0) {
    return (
      <Container className="py-16">
        <EmptyState
          title="Your cart is empty"
          description="Add some delicious items from our shop to get started."
          action={
            <Button as="a" href="/shop" size="md">
              Browse Shop
            </Button>
          }
        />
      </Container>
    )
  }

  return (
    <Container className="py-16">
      <div className="anim-fade-up is-visible">
        <SectionTitle
          align="left"
          eyebrow="Cart"
          title={`Your Cart (${itemCount} ${itemCount === 1 ? 'item' : 'items'})`}
          className="mx-0"
        />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={`${item.productId}-${item.packLabel}`}
              className="flex flex-col gap-4 rounded-card border border-border bg-surface p-4 sm:flex-row sm:items-center anim-fade-up is-visible"
            >
              {/* Product Image */}
              {item.image && (
                <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-accent/10">
                  <img src={item.image} alt={item.productName} className="h-full w-full object-cover" />
                </div>
              )}

              {/* Info */}
              <div className="flex-1 min-w-0">
                <Link to={`/shop/${item.productSlug}`} className="font-display text-base font-semibold text-secondary hover:text-primary transition-colors">
                  {item.productName}
                </Link>
                <p className="mt-0.5 text-sm text-text-muted">
                  {item.packLabel} — {item.packWeight}
                </p>
                <p className="mt-1 text-sm font-semibold text-secondary">৳{item.price} each</p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => updateQuantity(item.productId, item.packLabel, item.quantity - 1)}
                  className="btn-press flex h-8 w-8 items-center justify-center rounded-full border border-border text-secondary transition-colors hover:bg-black/5"
                >
                  <FiMinus size={14} />
                </button>
                <span className="w-8 text-center text-sm font-semibold">{item.quantity}</span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => updateQuantity(item.productId, item.packLabel, item.quantity + 1)}
                  className="btn-press flex h-8 w-8 items-center justify-center rounded-full border border-border text-secondary transition-colors hover:bg-black/5"
                >
                  <FiPlus size={14} />
                </button>
              </div>

              {/* Line Total + Remove */}
              <div className="flex items-center gap-4 sm:flex-col sm:items-end">
                <p className="font-semibold text-secondary">৳{item.price * item.quantity}</p>
                <button
                  type="button"
                  aria-label={`Remove ${item.productName}`}
                  onClick={() => removeItem(item.productId, item.packLabel)}
                  className="btn-press rounded-full p-2 text-text-muted transition-colors hover:bg-error/10 hover:text-error"
                >
                  <FiTrash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 rounded-card border border-border bg-surface p-6">
            <h3 className="font-display text-lg font-semibold text-secondary">Order Summary</h3>

            <div className="mt-4 space-y-3 border-b border-border pb-4">
              {items.map((item) => (
                <div key={`${item.productId}-${item.packLabel}`} className="flex justify-between text-sm">
                  <span className="text-text-muted truncate pr-2">
                    {item.productName} ({item.packLabel}) × {item.quantity}
                  </span>
                  <span className="shrink-0 font-medium text-secondary">৳{item.price * item.quantity}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-between pt-4 text-base font-semibold">
              <span className="text-secondary">Total</span>
              <span className="text-primary">৳{total}</span>
            </div>

            <Button as="a" href="/checkout" size="md" className="mt-6 w-full btn-press">
              <FiShoppingBag size={18} />
              Proceed to Checkout
            </Button>

            <Link to="/shop" className="mt-3 block text-center text-sm text-text-muted hover:text-primary transition-colors">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </Container>
  )
}
