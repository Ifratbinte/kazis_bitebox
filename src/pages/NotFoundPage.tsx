import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export function NotFoundPage() {
  return (
    <Container className="flex flex-col items-center justify-center py-32 text-center">
      <p className="animate-bounce-in font-display text-6xl font-semibold text-primary">404</p>
      <h1 className="hero-title mt-4 font-display text-2xl font-semibold text-secondary">Page not found</h1>
      <p className="hero-subtitle mt-2 max-w-sm text-text-muted">
        The page you're looking for doesn't exist, or may have moved.
      </p>
      <Button as="a" href="/" className="mt-8 btn-press hero-buttons">
        Back to Home
      </Button>
      <Link to="/shop" className="mt-3 text-sm text-primary transition-all duration-200 hover:underline hover:tracking-wide">
        Or browse the Shop
      </Link>
    </Container>
  )
}
