import { useState, useRef, useEffect } from 'react'
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
          <FAQItem
            key={item.id}
            item={item}
            isOpen={isOpen}
            onToggle={() => setOpenId(isOpen ? null : item.id)}
          />
        )
      })}
    </div>
  )
}

function FAQItem({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight)
    }
  }, [isOpen])

  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-200 hover:bg-primary/5"
      >
        <span className="font-semibold text-secondary">{item.question}</span>
        <span
          className={cn(
            'flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border text-secondary transition-transform duration-300',
            isOpen && 'rotate-45 bg-primary/10 border-primary/30',
          )}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? height : 0 }}
      >
        <div ref={contentRef} className="px-5 pb-4 text-sm text-text-muted">
          {item.answer}
        </div>
      </div>
    </div>
  )
}
