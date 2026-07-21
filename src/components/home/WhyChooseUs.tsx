import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { FeatureCard } from '@/components/home/FeatureCard'
import { SnowflakeIcon, ClockIcon, LeafIcon, ShieldIcon } from '@/components/ui/icons'

const features = [
  {
    icon: <SnowflakeIcon />,
    title: 'Frozen at peak flavor',
    description: 'Prepared and frozen the same day, locking in taste and texture — not just shelf life.',
  },
  {
    icon: <ClockIcon />,
    title: 'Ready in minutes',
    description: 'No thawing, no marinating. Straight from the freezer to your steamer or pan.',
  },
  {
    icon: <LeafIcon />,
    title: 'Real ingredients',
    description: 'Fresh chicken and everyday ingredients — nothing artificial, nothing you can\'t pronounce.',
  },
  {
    icon: <ShieldIcon />,
    title: 'Quality checked',
    description: 'Every batch is prepared under strict hygiene standards before it reaches your freezer.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <Container>
        <SectionTitle
          eyebrow="Why BiteBox"
          title="Frozen doesn't have to mean ordinary"
          description="Every pack is made to taste like it just came out of the kitchen — because it did, before we froze it."
        />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </Container>
    </section>
  )
}
