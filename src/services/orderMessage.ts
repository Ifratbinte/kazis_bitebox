import { CONTACT } from '@/constants/site'
import type { CartItem, CustomerInfo, OrderChannel, OrderRequest } from '@/types'

function buildSingleOrderText({ productName, packSize, quantity }: OrderRequest): string {
  return `Hi Kazi's BiteBox! I'd like to order:\n${quantity} x ${productName} (${packSize})`
}

function buildCartOrderText(items: CartItem[], customer: CustomerInfo): string {
  const lines = items.map((i) => `${i.quantity} x ${i.productName} (${i.packLabel} - ${i.packWeight}) — ৳${i.price * i.quantity}`)
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  let text = `Hi Kazi's BiteBox! I'd like to place an order:\n\n`
  text += lines.join('\n')
  text += `\n\nTotal: ৳${total}`
  text += `\n\n--- Delivery Info ---`
  text += `\nName: ${customer.name}`
  text += `\nPhone: ${customer.phone}`
  if (customer.email) text += `\nEmail: ${customer.email}`
  text += `\nAddress: ${customer.address}`
  if (customer.notes) text += `\nNote: ${customer.notes}`

  return text
}

export function getOrderLink(order: OrderRequest, channel: OrderChannel = 'messenger'): string {
  const text = buildSingleOrderText(order)

  switch (channel) {
    case 'messenger':
      return `${CONTACT.messenger}?text=${encodeURIComponent(text)}`
    case 'whatsapp':
      return `https://wa.me/${CONTACT.whatsapp.replace(/\s+/g, '')}?text=${encodeURIComponent(text)}`
    case 'phone':
      return `tel:${CONTACT.phone.replace(/\s+/g, '')}`
  }
}

export function getCartOrderLink(items: CartItem[], customer: CustomerInfo, channel: OrderChannel = 'messenger'): string {
  const text = buildCartOrderText(items, customer)

  switch (channel) {
    case 'messenger':
      return `${CONTACT.messenger}?text=${encodeURIComponent(text)}`
    case 'whatsapp':
      return `https://wa.me/${CONTACT.whatsapp.replace(/\s+/g, '')}?text=${encodeURIComponent(text)}`
    case 'phone':
      return `tel:${CONTACT.phone.replace(/\s+/g, '')}`
  }
}
