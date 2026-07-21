import { LegalPageLayout } from '@/components/shared/LegalPageLayout'

export function PrivacyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" updatedDate="July 2026">
      <p>
        Kazi's BiteBox ("we", "us") respects your privacy. This policy explains what
        information we collect when you visit this website or place an order, and how we use it.
      </p>

      <div>
        <h2 className="font-display text-xl font-semibold text-secondary">Information We Collect</h2>
        <p className="mt-2">
          When you place an order through Messenger, WhatsApp, or phone, we collect your name,
          contact number, and delivery address so we can fulfill your order. We do not collect
          payment card details, since payments are handled directly (cash or bKash) at the point
          of delivery.
        </p>
      </div>

      <div>
        <h2 className="font-display text-xl font-semibold text-secondary">How We Use Your Information</h2>
        <p className="mt-2">
          We use the information you provide solely to confirm, prepare, and deliver your order,
          and to contact you about order updates. We do not sell or share your information with
          third parties for marketing purposes.
        </p>
      </div>

      <div>
        <h2 className="font-display text-xl font-semibold text-secondary">Third-Party Platforms</h2>
        <p className="mt-2">
          Orders placed via Facebook Messenger or WhatsApp are also subject to those platforms'
          own privacy policies, since your conversation takes place on their service.
        </p>
      </div>

      <div>
        <h2 className="font-display text-xl font-semibold text-secondary">Contact Us</h2>
        <p className="mt-2">
          If you have questions about this policy or how your information is handled, message us
          on Facebook or reach out via the Contact page.
        </p>
      </div>
    </LegalPageLayout>
  )
}
