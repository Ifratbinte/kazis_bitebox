import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { FeatureCard } from '@/components/home/FeatureCard'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { cn } from '@/utils/cn'
import { FiShield } from 'react-icons/fi'
import { FaLeaf } from "react-icons/fa";
import { GoPackage } from "react-icons/go";

const aboutFeatures = [
  {
    icon: <FaLeaf size={22} />,
    title: 'Quality Commitment',
    description: "Fresh chicken, checked ingredients, and recipes tested until they're right — every single batch.",
  },
  {
    icon: <FiShield size={22} />,
    title: 'Food Safety',
    description: 'Prepared under strict hygiene standards and frozen the same day to lock in quality safely.',
  },
  {
    icon: <GoPackage size={22} />,
    title: 'Why Frozen Food',
    description: "Done right, freezing preserves flavor at its peak — it's convenience without the compromise.",
  },
]

export function AboutPage() {
  const { ref: storyRef, isVisible: storyVisible } = useScrollReveal()
  const { ref: missionRef, isVisible: missionVisible } = useScrollReveal()
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollReveal()

  return (
    <>
      <section className="border-b border-border bg-accent/10 py-16 sm:py-20">
        <Container className="max-w-3xl text-center">
          <p className="anim-fade-down is-visible text-sm font-semibold uppercase tracking-widest text-primary">Our Story</p>
          <h1 className="hero-title mt-3 font-display text-3xl font-semibold text-secondary sm:text-4xl">
            Made the way we'd want to eat it ourselves
          </h1>
          <p className="hero-subtitle mt-4 text-text-muted">
            Kazi's BiteBox started with a simple frustration: most frozen food trades taste for
            convenience. We didn't think that trade should be necessary — so we built a brand
            around proving it isn't.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20" ref={storyRef}>
        <Container className="max-w-3xl space-y-10">
          <div className={cn('anim-fade-up', storyVisible && 'is-visible')}>
            <h2 className="font-display text-2xl font-semibold text-secondary">How we started</h2>
            <p className="mt-3 text-text-muted">
              BiteBox began in a home kitchen in Dhaka, testing momo and roll recipes on friends
              and family until the response stopped being polite and started being genuine
              requests for more. What was a weekend hobby became a small batch operation — and
              now, a brand people order from every week.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2" ref={missionRef}>
            <div className={cn('anim-fade-left', missionVisible && 'is-visible')}>
              <h2 className="font-display text-xl font-semibold text-secondary">Our Mission</h2>
              <p className="mt-2 text-text-muted">
                To make restaurant-quality frozen food the easy, everyday choice for busy
                households across Bangladesh — without compromising on taste or ingredients.
              </p>
            </div>
            <div className={cn('anim-fade-right', missionVisible && 'is-visible')} style={{ transitionDelay: '150ms' }}>
              <h2 className="font-display text-xl font-semibold text-secondary">Our Vision</h2>
              <p className="mt-2 text-text-muted">
                To become the frozen food brand Bangladeshi families trust first — known for
                consistency, quality, and food that actually tastes homemade.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-16 sm:py-20" ref={featuresRef}>
        <Container>
          <div className={cn('anim-fade-up', featuresVisible && 'is-visible')}>
            <SectionTitle
              eyebrow="Our commitment"
              title="Quality and safety, not just marketing words"
            />
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {aboutFeatures.map((f, index) => (
              <div
                key={f.title}
                className={cn('anim-fade-up', featuresVisible && 'is-visible')}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <FeatureCard {...f} />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
