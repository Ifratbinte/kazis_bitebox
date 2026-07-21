import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export function NotFoundPage() {
  return (
    <Container className="flex flex-col items-center justify-center py-32 text-center">
      <p className="font-display text-6xl font-semibold text-primary">404</p>
      <h1 className="mt-4 font-display text-2xl font-semibold text-secondary">Page not found</h1>
      <p className="mt-2 max-w-sm text-text-muted">
        The page you're looking for doesn't exist, or may have moved.
      </p>
      <Button as="a" href="/" className="mt-8">
        Back to Home
      </Button>
      <Link to="/shop" className="mt-3 text-sm text-primary hover:underline">
        Or browse the Shop
      </Link>
    </Container>
  )
}
