import { useEffect, useState } from 'react'
import type { Product } from '@/types'
import { Button } from '@/components/ui/Button'
import { getOrderLink } from '@/services/orderMessage'

interface OrderModalProps {
  product: Product | null
  onClose: () => void
}

export function OrderModal({ product, onClose }: OrderModalProps) {
  const [packIndex, setPackIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    setPackIndex(0)
    setQuantity(1)
  }, [product])

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    if (product) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [product, onClose])

  if (!product) return null

  const pack = product.packSizes[packIndex]
  const orderLink = getOrderLink(
    { productName: product.name, packSize: `${pack.label} - ${pack.weight}`, quantity },
    'messenger',
  )

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-secondary/50 p-0 sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-t-card bg-surface p-6 shadow-xl sm:rounded-card"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <h3 id="order-modal-title" className="font-display text-xl font-semibold text-secondary">
            Order {product.name}
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-full p-1 text-text-muted hover:bg-black/5"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <fieldset className="mt-5">
          <legend className="text-sm font-semibold text-secondary">Pack size</legend>
          <div className="mt-2 grid grid-cols-1 gap-2">
            {product.packSizes.map((p, i) => (
              <label
                key={p.label}
                className={`flex cursor-pointer items-center justify-between rounded-lg border px-4 py-3 text-sm transition-colors ${
                  i === packIndex ? 'border-primary bg-primary/5' : 'border-border'
                }`}
              >
                <span className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="packSize"
                    checked={i === packIndex}
                    onChange={() => setPackIndex(i)}
                    className="accent-[#C1272D]"
                  />
                  <span>
                    {p.label} <span className="text-text-muted">({p.weight})</span>
                  </span>
                </span>
                <span className="font-semibold text-secondary">৳{p.price}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-sm font-semibold text-secondary">Quantity</span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Decrease quantity"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="h-8 w-8 rounded-full border border-border text-secondary hover:bg-black/5"
            >
              −
            </button>
            <span className="w-6 text-center font-semibold">{quantity}</span>
            <button
              type="button"
              aria-label="Increase quantity"
              onClick={() => setQuantity((q) => q + 1)}
              className="h-8 w-8 rounded-full border border-border text-secondary hover:bg-black/5"
            >
              +
            </button>
          </div>
        </div>

        <Button as="a" href={orderLink} target="_blank" rel="noopener noreferrer" className="mt-6 w-full">
          Send Order via Messenger
        </Button>
        <p className="mt-3 text-center text-xs text-text-muted">
          This opens Messenger with your order pre-filled — we'll confirm availability and delivery time there.
        </p>
      </div>
    </div>
  )
}
