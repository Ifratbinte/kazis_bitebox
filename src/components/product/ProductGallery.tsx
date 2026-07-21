import { useState } from 'react'
import { cn } from '@/utils/cn'

import roll1 from '@/assets/product/roll/roll-1.jpg'
import roll2 from '@/assets/product/roll/roll-2.jpg'
import roll3 from '@/assets/product/roll/roll-3.jpg'
import momo1 from '@/assets/product/momo/momo-1.jpg'
import momo2 from '@/assets/product/momo/momo-2.jpg'
import momo3 from '@/assets/product/momo/momo-3.jpg'

const images: Record<string, string[]> = {
  roll: [roll1, roll2, roll3],
  momo: [momo1, momo2, momo3],
}

interface ProductGalleryProps {
  category: string
  imageCount: number
}

export function ProductGallery({ category, imageCount }: ProductGalleryProps) {
  const [active, setActive] = useState(0)
  const imgs = images[category.toLowerCase()] ?? []

  return (
    <div>
      <div className="aspect-square overflow-hidden rounded-card bg-accent/10 p-10">
        {imgs[active] && (
          <img
            src={imgs[active]}
            alt={category}
            className="h-full w-full object-contain"
          />
        )}
      </div>
      <div className="mt-3 flex gap-2">
        {Array.from({ length: imageCount }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`View image ${i + 1}`}
            className={cn(
              'h-16 w-16 rounded-lg border-2 bg-accent/10 p-2 transition-colors',
              active === i ? 'border-primary' : 'border-transparent',
            )}
          >
            {imgs[i] && (
              <img
                src={imgs[i]}
                alt={category}
                className="h-full w-full object-contain"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
