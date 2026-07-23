import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { EmptyState } from '@/components/ui/EmptyState'
import { useCart } from '@/context/CartContext'
import { useOrders } from '@/context/OrderContext'
import { getCartOrderLink } from '@/services/orderMessage'
import type { CartItem, CustomerInfo, Order } from '@/types'
import { FiCheck, FiArrowLeft, FiExternalLink } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const INITIAL_CUSTOMER: CustomerInfo = {
  name: '',
  phone: '',
  email: '',
  address: '',
  notes: '',
}

export function CheckoutPage() {
  const { items, total, clearCart } = useCart()
  const { placeOrder } = useOrders()
  const [customer, setCustomer] = useState<CustomerInfo>(INITIAL_CUSTOMER)
  const [errors, setErrors] = useState<Partial<Record<keyof CustomerInfo, string>>>({})
  const [isPlacing, setIsPlacing] = useState(false)
  const placedOrderRef = useRef<Order | null>(null)
  const placedItemsRef = useRef<CartItem[]>([])
  const placedTotalRef = useRef(0)
  const whatsappLinkRef = useRef('')

  if (items.length === 0 && !placedOrderRef.current) {
    return (
      <Container className="py-16">
        <EmptyState
          title="Your cart is empty"
          description="Add some items before checking out."
          action={
            <Button as="a" href="/shop" size="md">
              Browse Shop
            </Button>
          }
        />
      </Container>
    )
  }

  function update(field: keyof CustomerInfo, value: string) {
    setCustomer((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  function validate(): boolean {
    const errs: Partial<Record<keyof CustomerInfo, string>> = {}
    if (!customer.name.trim()) errs.name = 'Name is required'
    if (!customer.phone.trim()) errs.phone = 'Phone number is required'
    if (!customer.address.trim()) errs.address = 'Delivery address is required'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  function handlePlaceOrder() {
    if (!validate() || isPlacing) return
    setIsPlacing(true)

    const savedItems = [...items]
    const savedTotal = total

    const order = placeOrder(savedItems, customer, savedTotal)

    placedOrderRef.current = order
    placedItemsRef.current = savedItems
    placedTotalRef.current = savedTotal
    whatsappLinkRef.current = getCartOrderLink(savedItems, customer, 'whatsapp', order.id)

    clearCart()
    setIsPlacing(false)
  }

  if (placedOrderRef.current) {
    const order = placedOrderRef.current
    const waLink = whatsappLinkRef.current

    return (
      <Container className="py-16">
        <div className="mx-auto max-w-lg text-center anim-scale-in is-visible">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
            <FiCheck size={32} className="text-success" />
          </div>
          <h1 className="mt-6 font-display text-3xl font-semibold text-secondary">Order Placed!</h1>
          <p className="mt-1 text-sm text-text-muted">
            Order ID: <span className="font-mono font-semibold text-secondary">{order.id}</span>
          </p>
          <p className="mt-3 text-text-muted">
            Your order has been saved. Now send it to us on WhatsApp so we can confirm availability and delivery time.
          </p>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-press mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-3 text-base font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg"
          >
            <FaWhatsapp size={22} />
            Send Order via WhatsApp
            <FiExternalLink size={14} />
          </a>

          <div className="mt-6 rounded-card border border-border bg-surface p-5 text-left">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-secondary">Order Summary</h3>
              <span className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-semibold text-primary">
                {order.status.toUpperCase()}
              </span>
            </div>
            <div className="mt-3 space-y-2">
              {placedItemsRef.current.map((item) => (
                <div key={`${item.productId}-${item.packLabel}`} className="flex justify-between text-sm">
                  <span className="text-text-muted">
                    {item.productName} ({item.packLabel}) × {item.quantity}
                  </span>
                  <span className="font-medium text-secondary">৳{item.price * item.quantity}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 flex justify-between border-t border-border pt-3 text-sm font-semibold">
              <span>Total</span>
              <span className="text-primary">৳{placedTotalRef.current}</span>
            </div>

            <div className="mt-4 rounded-lg bg-accent/10 p-3 text-xs text-text-muted">
              <p className="font-semibold text-secondary">How it works:</p>
              <ol className="mt-1 list-decimal space-y-1 pl-4">
                <li>Click "Send Order via WhatsApp" above</li>
                <li>The message with your order details will be pre-filled</li>
                <li>Hit send on WhatsApp</li>
                <li>We'll confirm availability and delivery time</li>
              </ol>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button as="a" href="/shop" variant="outline" size="md">
              Continue Shopping
            </Button>
            <Button as="a" href="/orders" variant="ghost" size="md">
              View All Orders
            </Button>
          </div>
        </div>
      </Container>
    )
  }

  return (
    <Container className="py-16">
      <Link to="/cart" className="mb-6 inline-flex items-center gap-1 text-sm text-text-muted hover:text-primary transition-colors anim-fade-up is-visible">
        <FiArrowLeft size={14} />
        Back to Cart
      </Link>

      <div className="anim-fade-up is-visible" style={{ transitionDelay: '50ms' }}>
        <SectionTitle
          align="left"
          eyebrow="Checkout"
          title="Delivery Information"
          className="mx-0"
        />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
        {/* Form */}
        <div className="lg:col-span-2 anim-fade-up is-visible" style={{ transitionDelay: '100ms' }}>
          <div className="rounded-card border border-border bg-surface p-6">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Input
                id="checkout-name"
                label="Full Name"
                required
                placeholder="Your full name"
                value={customer.name}
                onChange={(e) => update('name', e.target.value)}
                error={errors.name}
              />
              <Input
                id="checkout-phone"
                label="Phone Number"
                required
                placeholder="+880 ..."
                value={customer.phone}
                onChange={(e) => update('phone', e.target.value)}
                error={errors.phone}
              />
              <Input
                id="checkout-email"
                label="Email (optional)"
                type="email"
                placeholder="you@example.com"
                value={customer.email}
                onChange={(e) => update('email', e.target.value)}
              />
              <Input
                id="checkout-address"
                label="Delivery Address"
                required
                placeholder="Sector, Area, City"
                value={customer.address}
                onChange={(e) => update('address', e.target.value)}
                error={errors.address}
              />
            </div>
            <div className="mt-5">
              <Textarea
                id="checkout-notes"
                label="Delivery Notes (optional)"
                placeholder="Any special instructions for delivery..."
                rows={3}
                value={customer.notes}
                onChange={(e) => update('notes', e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1 anim-fade-up is-visible" style={{ transitionDelay: '200ms' }}>
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

            <button
              type="button"
              onClick={handlePlaceOrder}
              disabled={isPlacing}
              className="btn-press mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaWhatsapp size={18} />
              {isPlacing ? 'Placing Order...' : 'Place Order & Send via WhatsApp'}
            </button>

            <p className="mt-3 text-center text-xs text-text-muted">
              Your order will be saved and you'll be redirected to WhatsApp to confirm.
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}
