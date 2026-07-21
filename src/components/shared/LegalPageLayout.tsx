import type { ReactNode } from 'react'
import { Container } from '@/components/ui/Container'

interface LegalPageLayoutProps {
  title: string
  updatedDate: string
  children: ReactNode
}

export function LegalPageLayout({ title, updatedDate, children }: LegalPageLayoutProps) {
  return (
    <Container className="max-w-3xl py-16">
      <h1 className="font-display text-3xl font-semibold text-secondary">{title}</h1>
      <p className="mt-2 text-sm text-text-muted">Last updated: {updatedDate}</p>
      <div className="prose-legal mt-8 space-y-6 text-secondary/90">{children}</div>
    </Container>
  )
}
