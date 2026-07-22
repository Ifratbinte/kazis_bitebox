import { useEffect, useState } from 'react'
import type { Product } from '@/types'
import { getOrderLink } from '@/services/orderMessage'
import { FiX, FiPhone } from 'react-icons/fi'
import { TbBrandMessenger } from 'react-icons/tb'
import { FaWhatsapp } from 'react-icons/fa'
import { CONTACT } from '@/constants/site'

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
  const orderRequest = { productName: product.name, packSize: `${pack.label} - ${pack.weight}`, quantity }
  const orderLink = getOrderLink(orderRequest, 'messenger')
  const whatsappLink = getOrderLink(orderRequest, 'whatsapp')

  return (
    <div
      className="fixed inset-0 z-100 flex items-end justify-center bg-secondary/50 p-0 sm:items-center sm:p-4 modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-t-card bg-surface p-6 shadow-xl sm:rounded-card modal-content"
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
            className="btn-press rounded-full p-1 text-text-muted transition-colors hover:bg-black/5"
          >
            <FiX size={20} aria-hidden="true" />
          </button>
        </div>

        <fieldset className="mt-5">
          <legend className="text-sm font-semibold text-secondary">Pack size</legend>
          <div className="mt-2 grid grid-cols-1 gap-2">
            {product.packSizes.map((p, i) => (
              <label
                key={p.label}
                className={`flex cursor-pointer items-center justify-between rounded-lg border px-4 py-3 text-sm transition-all duration-200 ${
                  i === packIndex ? 'border-primary bg-primary/5 shadow-sm' : 'border-border hover:border-primary/30'
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
              className="btn-press h-8 w-8 rounded-full border border-border text-secondary transition-colors hover:bg-black/5"
            >
              −
            </button>
            <span className="w-6 text-center font-semibold">{quantity}</span>
            <button
              type="button"
              aria-label="Increase quantity"
              onClick={() => setQuantity((q) => q + 1)}
              className="btn-press h-8 w-8 rounded-full border border-border text-secondary transition-colors hover:bg-black/5"
            >
              +
            </button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          <a
            href={orderLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-press flex items-center justify-center gap-2 rounded-lg bg-[#006AFF] px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg"
          >
            <TbBrandMessenger size={20} aria-hidden="true" />
            <span className="hidden sm:inline">Messenger</span>
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-press flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg"
          >
            <FaWhatsapp size={20} aria-hidden="true" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
          <a
            href={`tel:${CONTACT.phone}`}
            className="btn-press flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg"
          >
            <FiPhone size={20} aria-hidden="true" />
            <span className="hidden sm:inline">Call</span>
          </a>
        </div>
        <p className="mt-3 text-center text-xs text-text-muted">
          We'll confirm availability and delivery time there.
        </p>
      </div>
    </div>
  )
}
