import type { Testimonial } from '@/types'
import { StarIcon } from '@/components/ui/icons'

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex h-full flex-col rounded-card border border-border bg-surface p-6">
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} filled={i < testimonial.rating} />
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
