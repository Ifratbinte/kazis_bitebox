import type { ReactNode } from 'react'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="card-hover rounded-card border border-border bg-surface p-6 hover:border-gold/30">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold text-secondary">{title}</h3>
      <p className="mt-2 text-sm text-text-muted">{description}</p>
    </div>
  )
}
