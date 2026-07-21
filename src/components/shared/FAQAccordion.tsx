import { useState } from 'react'
import type { FAQItem } from '@/types'
import { cn } from '@/utils/cn'

interface FAQAccordionProps {
  items: FAQItem[]
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null)

  return (
    <div className="divide-y divide-border rounded-card border border-border bg-surface">
      {items.map((item) => {
        const isOpen = openId === item.id
        return (
          <div key={item.id}>
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-semibold text-secondary">{item.question}</span>
              <span
                className={cn(
                  'flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border text-secondary transition-transform',
                  isOpen && 'rotate-45',
                )}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            {isOpen && <p className="px-5 pb-4 text-sm text-text-muted">{item.answer}</p>}
          </div>
        )
      })}
    </div>
  )
}
