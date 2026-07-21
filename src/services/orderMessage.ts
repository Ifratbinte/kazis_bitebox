import { CONTACT } from '@/constants/site'
import type { OrderChannel, OrderRequest } from '@/types'

/**
 * Builds the message text sent when a customer orders.
 * Keeping this as a pure function (not tied to any channel) means
 * swapping the transport later (e.g. to a real order API) only
 * requires changing how the message/result is used, not how it's built.
 */
function buildOrderText({ productName, packSize, quantity }: OrderRequest): string {
  return `Hi Kazi's BiteBox! I'd like to order:\n${quantity} x ${productName} (${packSize})`
}

/**
 * Returns a deep link for the given channel with the order pre-filled.
 * This is the seam that becomes a real checkout/API call later —
 * callers only ever need a link or a submit function, not channel details.
 */
export function getOrderLink(order: OrderRequest, channel: OrderChannel = 'messenger'): string {
  const text = buildOrderText(order)

  switch (channel) {
    case 'messenger':
      return `${CONTACT.messenger}?text=${encodeURIComponent(text)}`
    case 'whatsapp':
      return `https://wa.me/${CONTACT.whatsapp.replace(/\s+/g, '')}?text=${encodeURIComponent(text)}`
    case 'phone':
      return `tel:${CONTACT.phone.replace(/\s+/g, '')}`
  }
}
