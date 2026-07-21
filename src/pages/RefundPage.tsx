import { LegalPageLayout } from '@/components/shared/LegalPageLayout'

export function RefundPage() {
  return (
    <LegalPageLayout title="Return & Refund Policy" updatedDate="July 2026">
      <p>
        Because our products are frozen food, we handle returns and refunds differently from
        typical retail items — mainly for food safety reasons.
      </p>

      <div>
        <h2 className="font-display text-xl font-semibold text-secondary">Quality Issues</h2>
        <p className="mt-2">
          If your order arrives damaged, thawed, or not matching what you ordered, message us on
          Facebook or WhatsApp within 24 hours of delivery with a photo of the product. We'll
          arrange a replacement or refund once we've reviewed the issue.
        </p>
      </div>

      <div>
        <h2 className="font-display text-xl font-semibold text-secondary">Change of Mind</h2>
        <p className="mt-2">
          Since our products are frozen and perishable, we're unable to accept returns for
          change-of-mind once an order has been delivered and accepted.
        </p>
      </div>

      <div>
        <h2 className="font-display text-xl font-semibold text-secondary">Order Cancellations</h2>
        <p className="mt-2">
          Orders can be cancelled free of charge any time before they're dispatched. Once an order
          is out for delivery, it can no longer be cancelled.
        </p>
      </div>

      <div>
        <h2 className="font-display text-xl font-semibold text-secondary">Refund Method</h2>
        <p className="mt-2">
          Approved refunds are issued via bKash or adjusted against your next order, whichever you
          prefer — we'll confirm details with you directly over Messenger or WhatsApp.
        </p>
      </div>
    </LegalPageLayout>
  )
}
