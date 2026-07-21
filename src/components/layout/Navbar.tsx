import { useState } from 'react'
import { NavLink as RouterNavLink } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { NAV_LINKS } from '@/constants/site'
import logo from '@/assets/logo.png'
import { cn } from '@/utils/cn'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <Container className="flex h-18 items-center justify-between py-3">
        <RouterNavLink to="/" className="flex items-center">
          <img src={logo} alt="BiteBox" className="h-8 w-auto" />
        </RouterNavLink>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <RouterNavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  'text-sm font-medium text-secondary/80 transition-colors hover:text-primary',
                  isActive && 'text-primary',
                )
              }
            >
              {link.label}
            </RouterNavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button as="a" href="/shop" size="sm">
            Order Now
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-secondary md:hidden"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="sr-only">Toggle menu</span>
          {isMenuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </Container>

      {isMenuOpen && (
        <nav
          className="border-t border-border bg-background md:hidden"
          aria-label="Mobile navigation"
        >
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <RouterNavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'rounded-lg px-3 py-3 text-base font-medium text-secondary/80',
                    isActive && 'bg-primary/10 text-primary',
                  )
                }
              >
                {link.label}
              </RouterNavLink>
            ))}
            <Button as="a" href="/shop" size="sm" className="mt-2 w-full">
              Order Now
            </Button>
          </Container>
        </nav>
      )}
    </header>
  )
}
