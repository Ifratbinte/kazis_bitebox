import { CONTACT } from '@/constants/site'
import type { CartItem, CustomerInfo, OrderChannel, OrderRequest } from '@/types'

function buildSingleOrderText({ productName, packSize, quantity }: OrderRequest): string {
  return `Hi Kazi's BiteBox! I'd like to order:\n${quantity} x ${productName} (${packSize})`
}

function buildCartOrderText(items: CartItem[], customer: CustomerInfo, orderId?: string): string {
  const lines = items.map((i, idx) =>
    `${idx + 1}. ${i.quantity} x ${i.productName} (${i.packLabel} — ${i.packWeight}) — ৳${i.price * i.quantity}`,
  )
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  let text = `*New Order${orderId ? ` #${orderId}` : ''}*\n`
  text += `━━━━━━━━━━━━━━━━━\n\n`
  text += `📦 *Items:*\n`
  text += lines.join('\n')
  text += `\n\n💰 *Total: ৳${total}*\n`
  text += `\n👤 *Customer Info:*\n`
  text += `Name: ${customer.name}\n`
  text += `Phone: ${customer.phone}\n`
  if (customer.email) text += `Email: ${customer.email}\n`
  text += `Address: ${customer.address}\n`
  if (customer.notes) text += `Note: ${customer.notes}\n`

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

export function getCartOrderLink(
  items: CartItem[],
  customer: CustomerInfo,
  channel: OrderChannel = 'messenger',
  orderId?: string,
): string {
  const text = buildCartOrderText(items, customer, orderId)

  switch (channel) {
    case 'messenger':
      return `${CONTACT.messenger}?text=${encodeURIComponent(text)}`
    case 'whatsapp':
      return `https://wa.me/${CONTACT.whatsapp.replace(/\s+/g, '')}?text=${encodeURIComponent(text)}`
    case 'phone':
      return `tel:${CONTACT.phone.replace(/\s+/g, '')}`
  }
}
