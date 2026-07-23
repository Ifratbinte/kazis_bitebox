import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import type { Product } from '@/types'
import { getOrderLink } from '@/services/orderMessage'
import { useCart } from '@/context/CartContext'
import { bestSellImages, productImages } from '@/data/productImages'
import { FiX, FiPhone, FiShoppingBag } from 'react-icons/fi'
import { TbBrandMessenger } from 'react-icons/tb'
import { FaWhatsapp } from 'react-icons/fa'
import { CONTACT } from '@/constants/site'

interface OrderModalProps {
  product: Product | null
  onClose: () => void
}

export function OrderModal({ product, onClose }: OrderModalProps) {
  const [selectedPacks, setSelectedPacks] = useState<Record<number, number>>({})
  const [addedToCart, setAddedToCart] = useState(false)
  const { addItem } = useCart()

  useEffect(() => {
    setSelectedPacks({})
    setAddedToCart(false)
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

  const currentProduct = product

  function togglePack(index: number) {
    setSelectedPacks((prev) => {
      const next = { ...prev }
      if (index in next) {
        delete next[index]
      } else {
        next[index] = 1
      }
      return next
    })
    setAddedToCart(false)
  }

  function updatePackQuantity(index: number, delta: number) {
    setSelectedPacks((prev) => {
      const current = prev[index] ?? 1
      const nextQty = Math.max(1, current + delta)
      return { ...prev, [index]: nextQty }
    })
    setAddedToCart(false)
  }

  const selectedIndices = Object.keys(selectedPacks).map(Number)
  const totalPrice = selectedIndices.reduce(
    (sum, i) => sum + currentProduct.packSizes[i].price * selectedPacks[i],
    0,
  )

  const orderPacks = selectedIndices.map((i) => ({
    packSize: `${currentProduct.packSizes[i].label} - ${currentProduct.packSizes[i].weight}`,
    quantity: selectedPacks[i],
  }))
  const orderRequest = { productName: currentProduct.name, packs: orderPacks }
  const orderLink = getOrderLink(orderRequest, 'messenger')
  const whatsappLink = getOrderLink(orderRequest, 'whatsapp')
  const image = currentProduct.isBestSeller
    ? bestSellImages[`best-${currentProduct.slug}`] ?? productImages[currentProduct.slug]
    : productImages[currentProduct.slug]

  function handleAddToCart() {
    selectedIndices.forEach((i) => {
      const pack = currentProduct.packSizes[i]
      addItem({
        productId: currentProduct.id,
        productName: currentProduct.name,
        productSlug: currentProduct.slug,
        packLabel: pack.label,
        packWeight: pack.weight,
        price: pack.price,
        quantity: selectedPacks[i],
        image,
      })
    })
    setAddedToCart(true)
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-secondary/50 p-0 sm:items-center sm:p-4 modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-t-card bg-surface p-6 shadow-xl sm:rounded-card modal-content max-h-[85vh] overflow-y-auto"
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
          <legend className="text-sm font-semibold text-secondary">Pack size (select one or more)</legend>
          <div className="mt-2 grid grid-cols-1 gap-2">
            {product.packSizes.map((p, i) => {
              const isSelected = i in selectedPacks
              const packQty = selectedPacks[i] ?? 1
              return (
                <div
                  key={p.label}
                  className={`rounded-lg border px-4 py-3 text-sm transition-all duration-200 ${
                    isSelected ? 'border-primary bg-primary/5 shadow-sm' : 'border-border hover:border-primary/30'
                  }`}
                >
                  <label className="flex cursor-pointer items-center justify-between">
                    <span className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => togglePack(i)}
                        className="accent-[#C1272D]"
                      />
                      <span>
                        {p.label} <span className="text-text-muted">({p.weight})</span>
                      </span>
                    </span>
                    <span className="font-semibold text-secondary">৳{p.price}</span>
                  </label>
                  {isSelected && (
                    <div className="mt-2 flex items-center justify-end gap-3 border-t border-primary/10 pt-2">
                      <span className="text-xs text-text-muted">Qty</span>
                      <button
                        type="button"
                        aria-label={`Decrease quantity for ${p.label}`}
                        onClick={() => updatePackQuantity(i, -1)}
                        className="btn-press h-7 w-7 rounded-full border border-border text-secondary transition-colors hover:bg-black/5"
                      >
                        −
                      </button>
                      <span className="w-5 text-center text-sm font-semibold">{packQty}</span>
                      <button
                        type="button"
                        aria-label={`Increase quantity for ${p.label}`}
                        onClick={() => updatePackQuantity(i, 1)}
                        className="btn-press h-7 w-7 rounded-full border border-border text-secondary transition-colors hover:bg-black/5"
                      >
                        +
                      </button>
                      <span className="text-xs font-medium text-text-muted">৳{p.price * packQty}</span>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </fieldset>

        <div className="mt-5">
          {addedToCart ? (
            <div className="flex items-center justify-center gap-3">
              <span className="text-sm font-medium text-success">Added to cart!</span>
              <Link
                to="/cart"
                onClick={onClose}
                className="text-sm font-semibold text-primary hover:underline"
              >
                View Cart →
              </Link>
            </div>
          ) : (
            <button
              type="button"
              onClick={handleAddToCart}
              disabled={selectedIndices.length === 0}
              className="btn-press flex w-full items-center justify-center gap-2 rounded-lg border-2 border-primary bg-primary px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:shadow-none"
            >
              <FiShoppingBag size={18} />
              {selectedIndices.length === 0
                ? 'Select a pack size'
                : `Add to Cart — ৳${totalPrice}`}
            </button>
          )}
        </div>

        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="bg-surface px-3 text-text-muted">or order directly via</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
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
            className="btn-press flex items-center justify-center gap-2 rounded-lg bg-secondary px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg"
          >
            <FiPhone size={20} aria-hidden="true" />
            <span className="hidden sm:inline">Call</span>
          </a>
        </div>
        <p className="mt-3 text-center text-xs text-text-muted">
          We'll confirm availability and delivery time there.
        </p>
      </div>
    </div>,
    document.body,
  )
}
