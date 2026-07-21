import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { TruckIcon, SnowflakeIcon, ClockIcon } from '@/components/ui/icons'

const points = [
  { icon: <TruckIcon />, label: 'Delivering across Dhaka' },
  { icon: <SnowflakeIcon />, label: 'Insulated packaging, still frozen on arrival' },
  { icon: <ClockIcon />, label: 'Same or next-day delivery' },
]

export function DeliveryInfoCompact() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="rounded-card bg-secondary px-6 py-10 text-white sm:px-10">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">Delivered frozen, every time</h2>
            <p className="mt-2 max-w-md text-white/70">
              We pack every order in insulated, food-safe packaging so it reaches your door still frozen.
            </p>
          </div>
          <ul className="flex flex-col gap-3">
            {points.map((p) => (
              <li key={p.label} className="flex items-center gap-3 text-sm">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-accent">
                  {p.icon}
                </span>
                {p.label}
              </li>
            ))}
          </ul>
        </div>
        <Link to="/delivery" className="mt-6 inline-block text-sm font-semibold text-accent hover:underline">
          See full delivery details →
        </Link>
      </Container>
    </section>
  )
}
