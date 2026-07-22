import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { cn } from '@/utils/cn'
import { FiTruck, FiClock } from 'react-icons/fi'
import { GoPackage } from "react-icons/go";

const points = [
  { icon: <FiTruck size={18} />, label: 'Delivering across Dhaka' },
  { icon: <GoPackage size={18} />, label: 'Insulated packaging, still frozen on arrival' },
  { icon: <FiClock size={18} />, label: 'Same or next-day delivery' },
]

export function DeliveryInfoCompact() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="py-16 sm:py-20" ref={ref}>
      <Container className={cn('anim-scale-in', isVisible && 'is-visible')}>
        <div className="rounded-card bg-secondary px-6 py-10 text-white sm:px-10">
          <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-display text-2xl font-semibold sm:text-3xl">Delivered frozen, every time</h2>
              <p className="mt-2 max-w-md text-white/70">
                We pack every order in insulated, food-safe packaging so it reaches your door still frozen.
              </p>
            </div>
            <ul className="flex flex-col gap-3">
              {points.map((p, index) => (
                <li
                  key={p.label}
                  className={cn('flex items-center gap-3 text-sm anim-fade-right', isVisible && 'is-visible')}
                  style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-accent transition-transform duration-300 hover:scale-110">
                    {p.icon}
                  </span>
                  {p.label}
                </li>
              ))}
            </ul>
          </div>
          <Link to="/delivery" className="mt-6 inline-block text-sm font-semibold text-accent transition-all duration-200 hover:underline hover:translate-x-1">
            See full delivery details →
          </Link>
        </div>
      </Container>
    </section>
  )
}
