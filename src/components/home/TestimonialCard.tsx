import type { Testimonial } from '@/types'
import { FiStar } from 'react-icons/fi'

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex h-full flex-col rounded-card border border-border bg-surface p-6">
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <FiStar
            key={i}
            size={16}
            className={i < testimonial.rating ? 'fill-accent text-accent' : 'text-border'}
          />
        ))}
      </div>
      <p className="mt-4 flex-1 text-sm text-text-muted">"{testimonial.quote}"</p>
      <div className="mt-5">
        <p className="text-sm font-semibold text-secondary">{testimonial.name}</p>
        <p className="text-xs text-text-muted">{testimonial.location}</p>
      </div>
    </div>
  )
}
