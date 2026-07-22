import { useState } from 'react'
import type { Testimonial } from '@/types'
import { FiStar } from 'react-icons/fi'

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const [showEnglish, setShowEnglish] = useState(false)

  return (
    <div className="card-hover flex h-full flex-col rounded-card border border-border bg-surface p-6 hover:border-primary/20">
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <FiStar
            key={i}
            size={16}
            className={`transition-all duration-200 ${i < testimonial.rating ? 'fill-gold text-gold' : 'text-border'}`}
          />
        ))}
      </div>
      <p className="mt-4 flex-1 text-sm text-text-muted">
        "{showEnglish ? testimonial.quoteEn : testimonial.quote}"
      </p>
      <div className="mt-4">
        <button
          type="button"
          onClick={() => setShowEnglish(!showEnglish)}
          className="text-xs text-primary transition-all duration-200 hover:underline hover:tracking-wide"
        >
          {showEnglish ? 'বাংলায় পড়ুন' : 'Read in English'}
        </button>
      </div>
      <div className="mt-3 border-t border-border pt-3">
        <p className="text-sm font-semibold text-secondary">{testimonial.name}</p>
        <p className="text-xs text-text-muted">{testimonial.location}</p>
      </div>
    </div>
  )
}
