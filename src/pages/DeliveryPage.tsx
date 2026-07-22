import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { FeatureCard } from '@/components/home/FeatureCard'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { cn } from '@/utils/cn'
import { FiTruck, FiShield, FiClock } from 'react-icons/fi'
import { GoPackage } from "react-icons/go";

const deliveryFeatures = [
  {
    icon: <FiTruck size={22} />,
    title: 'Delivery Areas',
    description: 'We currently deliver across Dhaka. Message us to check coverage for your area.',
  },
  {
    icon: <FiClock size={22} />,
    title: 'Delivery Charges',
    description: 'Delivery charges depend on your location and are confirmed when we finalize your order (placeholder — final rates shared on order confirmation).',
  },
  {
    icon: <GoPackage size={22} />,
    title: 'Packaging',
    description: 'Every order ships in insulated, food-safe packaging designed to keep products frozen in transit.',
  },
  {
    icon: <FiShield size={22} />,
    title: 'Food Handling',
    description: 'Orders are packed just before dispatch and handled under hygienic conditions from freezer to doorstep.',
  },
]

export function DeliveryPage() {
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollReveal()
  const { ref: processRef, isVisible: processVisible } = useScrollReveal()
  const { ref: trackingRef, isVisible: trackingVisible } = useScrollReveal()

  return (
    <Container className="py-16">
      <div className="anim-fade-up is-visible">
        <SectionTitle
          eyebrow="Delivery"
          title="How your order reaches you, still frozen"
          description="From our freezer to yours, without breaking the cold chain."
        />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2" ref={featuresRef}>
        {deliveryFeatures.map((f, index) => (
          <div
            key={f.title}
            className={cn('anim-fade-up', featuresVisible && 'is-visible')}
            style={{ transitionDelay: `${(index + 1) * 120}ms` }}
          >
            <FeatureCard {...f} />
          </div>
        ))}
      </div>

      <div className="mt-16 max-w-2xl" ref={processRef}>
        <h2 className={cn('font-display text-2xl font-semibold text-secondary anim-fade-up', processVisible && 'is-visible')}>
          Delivery Process
        </h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-text-muted">
          {['Send your order via Messenger, WhatsApp, or phone.', 'We confirm availability, price, and an estimated delivery window.', 'Your order is packed cold and dispatched for same or next-day delivery.', 'You pay on delivery (cash or bKash) once your order arrives.'].map((step, index) => (
            <li
              key={index}
              className={cn('anim-fade-left', processVisible && 'is-visible')}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {step}
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-12 rounded-card bg-primary/20 border border-dashed border-primary p-6" ref={trackingRef}>
        <div className={cn('anim-scale-in', trackingVisible && 'is-visible ')}>
          <h2 className="font-display text-lg font-bold text-secondary">Coming soon: Delivery Tracking</h2>
          <p className="mt-2 text-sm text-black">
            We're working on real-time order tracking so you'll know exactly when <strong className='text-primary'>BiteBox</strong> is on its
            way. For now, we'll keep you updated directly over Messenger or WhatsApp.
          </p>
        </div>
      </div>
    </Container>
  )
}
