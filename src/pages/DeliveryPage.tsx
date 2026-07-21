import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { FeatureCard } from '@/components/home/FeatureCard'
import { TruckIcon, SnowflakeIcon, ShieldIcon, ClockIcon } from '@/components/ui/icons'

export function DeliveryPage() {
  return (
    <Container className="py-16">
      <SectionTitle
        eyebrow="Delivery"
        title="How your order reaches you, still frozen"
        description="From our freezer to yours, without breaking the cold chain."
      />

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FeatureCard
          icon={<TruckIcon />}
          title="Delivery Areas"
          description="We currently deliver across Dhaka. Message us to check coverage for your area."
        />
        <FeatureCard
          icon={<ClockIcon />}
          title="Delivery Charges"
          description="Delivery charges depend on your location and are confirmed when we finalize your order (placeholder — final rates shared on order confirmation)."
        />
        <FeatureCard
          icon={<SnowflakeIcon />}
          title="Packaging"
          description="Every order ships in insulated, food-safe packaging designed to keep products frozen in transit."
        />
        <FeatureCard
          icon={<ShieldIcon />}
          title="Food Handling"
          description="Orders are packed just before dispatch and handled under hygienic conditions from freezer to doorstep."
        />
      </div>

      <div className="mt-16 max-w-2xl">
        <h2 className="font-display text-2xl font-semibold text-secondary">Delivery Process</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-text-muted">
          <li>Send your order via Messenger, WhatsApp, or phone.</li>
          <li>We confirm availability, price, and an estimated delivery window.</li>
          <li>Your order is packed cold and dispatched for same or next-day delivery.</li>
          <li>You pay on delivery (cash or bKash) once your order arrives.</li>
        </ol>
      </div>

      <div className="mt-12 rounded-card border border-dashed border-border p-6">
        <h2 className="font-display text-lg font-semibold text-secondary">Coming soon: Delivery Tracking</h2>
        <p className="mt-2 text-sm text-text-muted">
          We're working on real-time order tracking so you'll know exactly when BiteBox is on its
          way. For now, we'll keep you updated directly over Messenger or WhatsApp.
        </p>
      </div>
    </Container>
  )
}
