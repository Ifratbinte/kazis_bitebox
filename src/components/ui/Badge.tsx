import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

type BadgeTone = 'primary' | 'accent' | 'success' | 'neutral' | 'white'

const toneStyles: Record<BadgeTone, string> = {
  primary: 'bg-primary/10 text-primary',
  accent: 'bg-accent/15 text-accent',
  success: 'bg-success/10 text-success',
  neutral: 'bg-secondary/10 text-secondary',
  white: 'bg-white/30 text-white',
}

interface BadgeProps {
  children: ReactNode
  tone?: BadgeTone
  className?: string
}

export function Badge({ children, tone = 'neutral', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide',
        toneStyles[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
