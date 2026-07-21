import { Hero } from '@/components/home/Hero'
import { ProductShowcase } from '@/components/home/ProductShowcase'
import { WhyChooseUs } from '@/components/home/WhyChooseUs'
import { HowItWorks } from '@/components/home/HowItWorks'
import { Testimonials } from '@/components/home/Testimonials'
import { DeliveryInfoCompact } from '@/components/home/DeliveryInfoCompact'
import { FAQPreview } from '@/components/home/FAQPreview'
import { CTASection } from '@/components/home/CTASection'
import { OrderModal } from '@/components/product/OrderModal'
import { useOrderModal } from '@/hooks/useOrderModal'
import { products } from '@/data/products'

export function HomePage() {
  const { activeProduct, openOrderModal, closeOrderModal } = useOrderModal()
  const bestSellers = products.filter((p) => p.isBestSeller)

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
      <ProductShowcase
        eyebrow="Crowd favorites"
        title="Best Sellers"
        products={bestSellers}
        onOrderClick={openOrderModal}
      />
      <Testimonials />
      <DeliveryInfoCompact />
      <FAQPreview />
      <CTASection />
      <OrderModal product={activeProduct} onClose={closeOrderModal} />
    </>
  )
}
