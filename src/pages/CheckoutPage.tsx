import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { EmptyState } from '@/components/ui/EmptyState'
import { useCart } from '@/context/CartContext'
import { getCartOrderLink } from '@/services/orderMessage'
import type { CartItem, CustomerInfo, OrderChannel } from '@/types'
import { FiCheck, FiArrowLeft } from 'react-icons/fi'
import { TbBrandMessenger } from 'react-icons/tb'
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
  const [customer, setCustomer] = useState<CustomerInfo>(INITIAL_CUSTOMER)
  const [errors, setErrors] = useState<Partial<Record<keyof CustomerInfo, string>>>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitChannel, setSubmitChannel] = useState<OrderChannel | null>(null)
  const submittedItemsRef = useRef<CartItem[]>([])
  const submittedTotalRef = useRef(0)

  if (items.length === 0 && !submitted) {
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

  function handleOrder(channel: OrderChannel) {
    if (!validate()) return
    submittedItemsRef.current = [...items]
    submittedTotalRef.current = total
    setSubmitChannel(channel)
    setSubmitted(true)
    clearCart()
  }

  if (submitted && submitChannel) {
    const orderLink = getCartOrderLink(submittedItemsRef.current, customer, submitChannel)
    const savedTotal = submittedTotalRef.current

    return (
      <Container className="py-16">
        <div className="mx-auto max-w-lg text-center anim-scale-in is-visible">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
            <FiCheck size={32} className="text-success" />
          </div>
          <h1 className="mt-6 font-display text-3xl font-semibold text-secondary">Order Confirmed!</h1>
          <p className="mt-3 text-text-muted">
            Click the button below to send your order details to us on{' '}
            {submitChannel === 'messenger' ? 'Messenger' : 'WhatsApp'}. We'll confirm availability and delivery time.
          </p>
          <a
            href={orderLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-press mt-8 inline-flex items-center gap-2 rounded-full px-8 py-3 text-base font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg ${
              submitChannel === 'messenger' ? 'bg-[#006AFF]' : 'bg-[#25D366]'
            }`}
          >
            {submitChannel === 'messenger' ? <TbBrandMessenger size={20} /> : <FaWhatsapp size={20} />}
            Open {submitChannel === 'messenger' ? 'Messenger' : 'WhatsApp'}
          </a>

          <div className="mt-6 rounded-card border border-border bg-surface p-4 text-left">
            <h3 className="text-sm font-semibold text-secondary">Order Summary</h3>
            <div className="mt-2 space-y-2">
              {submittedItemsRef.current.map((item) => (
                <div key={`${item.productId}-${item.packLabel}`} className="flex justify-between text-sm">
                  <span className="text-text-muted">
                    {item.productName} ({item.packLabel}) × {item.quantity}
                  </span>
                  <span className="font-medium text-secondary">৳{item.price * item.quantity}</span>
                </div>
              ))}
            </div>
            <div className="mt-2 flex justify-between border-t border-border pt-2 text-sm font-semibold">
              <span>Total</span>
              <span className="text-primary">৳{savedTotal}</span>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button as="a" href="/shop" variant="outline" size="md">
              Continue Shopping
            </Button>
            <Button as="a" href="/" variant="ghost" size="md">
              Back to Home
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

            <div className="mt-6 space-y-3">
              <button
                type="button"
                onClick={() => handleOrder('messenger')}
                className="btn-press flex w-full items-center justify-center gap-2 rounded-lg bg-[#006AFF] px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg"
              >
                <TbBrandMessenger size={20} />
                Order via Messenger
              </button>
              <button
                type="button"
                onClick={() => handleOrder('whatsapp')}
                className="btn-press flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg"
              >
                <FaWhatsapp size={20} />
                Order via WhatsApp
              </button>
            </div>

            <p className="mt-3 text-center text-xs text-text-muted">
              We'll confirm availability and delivery time after you send the order.
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}
