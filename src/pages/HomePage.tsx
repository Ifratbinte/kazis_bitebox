import { Hero } from '@/components/home/Hero'
import { ProductShowcase } from '@/components/home/ProductShowcase'
import { WhyChooseUs } from '@/components/home/WhyChooseUs'
import { HowItWorks } from '@/components/home/HowItWorks'
import { Testimonials } from '@/components/home/Testimonials'
import { DeliveryInfoCompact } from '@/components/home/DeliveryInfoCompact'
import { FAQPreview } from '@/components/home/FAQPreview'
import { CTASection } from '@/components/home/CTASection'
import { OrderModal } from '@/components/product/OrderModal'
import { BestSellerCard } from '@/components/product/BestSellerCard'
import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { useOrderModal } from '@/hooks/useOrderModal'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { momoProducts } from '@/data/products/momos'
import { rollProducts } from '@/data/products/rolls'
import { cn } from '@/utils/cn'

const products = [...momoProducts, ...rollProducts]

export function HomePage() {
  const { activeProduct, openOrderModal, closeOrderModal } = useOrderModal()
  const bestSellers = products.filter((p) => p.isBestSeller)
  const { ref: bestSellerRef, isVisible: bestSellerVisible } = useScrollReveal()

  return (
    <>
      <Hero />
      <ProductShowcase
        eyebrow="Our range"
        title="Featured Products"
        description="Two crowd favorites, made the traditional way and frozen at their best."
        products={products}
        onOrderClick={openOrderModal}
      />
      <WhyChooseUs />
      <HowItWorks />

      <section
        ref={bestSellerRef}
        className="relative overflow-hidden bg-accent/5 py-16 sm:py-20"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <svg className="absolute -top-16 -left-16 h-72 w-72 text-gold/10 animate-float-slow" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="100" fill="currentColor" />
          </svg>
          <svg className="absolute -bottom-10 -right-10 h-56 w-56 text-gold/15 animate-float" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="100" fill="currentColor" />
          </svg>
          <svg className="absolute top-1/4 right-1/6 h-3 w-3 text-gold/20 animate-float-delay" viewBox="0 0 12 12">
            <circle cx="6" cy="6" r="6" fill="currentColor" />
          </svg>
          <svg className="absolute bottom-1/3 left-1/5 h-2.5 w-2.5 text-gold/25 animate-float" viewBox="0 0 10 10">
            <circle cx="5" cy="5" r="5" fill="currentColor" />
          </svg>
        </div>

        <Container className="relative">
          <div className={cn('anim-fade-up', bestSellerVisible && 'is-visible')}>
            <SectionTitle
              eyebrow="Crowd favorites"
              title="Best Selling Items"
              description="Our most-loved picks, ordered again and again."
            />
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {bestSellers.map((product, index) => (
              <div
                key={product.id}
                className={cn('anim-fade-up', bestSellerVisible && 'is-visible')}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <BestSellerCard product={product} onOrderClick={openOrderModal} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Testimonials />
      <DeliveryInfoCompact />
      <FAQPreview />
      <CTASection />
      <OrderModal product={activeProduct} onClose={closeOrderModal} />
    </>
  )
}
