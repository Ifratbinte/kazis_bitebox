import { LegalPageLayout } from '@/components/shared/LegalPageLayout'

export function TermsPage() {
  return (
    <LegalPageLayout title="Terms & Conditions" updatedDate="July 2026">
      <p>
        By ordering from Kazi's BiteBox, you agree to the following terms. Please read them
        before placing an order.
      </p>

      <div>
        <h2 className="font-display text-xl font-semibold text-secondary">Ordering</h2>
        <p className="mt-2">
          Orders are placed via Facebook Messenger, WhatsApp, or phone. An order is only confirmed
          once we've responded to acknowledge availability, price, and delivery timing — sending a
          message does not guarantee that stock is available.
        </p>
      </div>

      <div>
        <h2 className="font-display text-xl font-semibold text-secondary">Pricing</h2>
        <p className="mt-2">
          Prices listed on this site are subject to change without prior notice. The price
          confirmed at the time of order confirmation is the price that applies.
        </p>
      </div>

      <div>
        <h2 className="font-display text-xl font-semibold text-secondary">Delivery</h2>
        <p className="mt-2">
          We aim to deliver within the estimated window confirmed at order time, but delivery
          times may vary due to weather, traffic, or high order volume.
        </p>
      </div>

      <div>
        <h2 className="font-display text-xl font-semibold text-secondary">Payment</h2>
        <p className="mt-2">
          Payment is collected on delivery via cash or bKash, unless otherwise agreed at the time
          of order confirmation.
        </p>
      </div>

      <div>
        <h2 className="font-display text-xl font-semibold text-secondary">Changes to These Terms</h2>
        <p className="mt-2">
          We may update these terms from time to time. Continued use of this website or our
          ordering channels after changes are posted means you accept the updated terms.
        </p>
      </div>
    </LegalPageLayout>
  )
}
