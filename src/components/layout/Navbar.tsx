import { useState, useEffect } from 'react'
import { NavLink as RouterNavLink } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { NAV_LINKS } from '@/constants/site'
import logo from '@/assets/logo.png'
import { cn } from '@/utils/cn'
import { FiX, FiMenu } from 'react-icons/fi'

interface NavbarProps {
  transparent?: boolean
}

export function Navbar({ transparent = false }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const isNavbarTransparent = transparent && !isScrolled

  return (
    <>
      <header
        className={cn(
          'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
          isNavbarTransparent
            ? 'border-b border-transparent bg-transparent'
            : 'border-b border-border bg-background/95 backdrop-blur-md shadow-sm',
        )}
      >
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
            {isMenuOpen ? <FiX size={22} aria-hidden="true" /> : <FiMenu size={22} aria-hidden="true" />}
          </button>
        </Container>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div
        className={cn(
          'fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden',
          isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <div
        className={cn(
          'fixed right-0 top-0 z-[70] flex h-full w-72 flex-col bg-background shadow-xl transition-transform duration-300 ease-in-out md:hidden',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full',
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Decorative SVG shape */}
        <svg
          className="pointer-events-none absolute -right-28 top-10 h-64 w-64 text-primary/5"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.3,88.4,-0.9C86.8,14.4,81,28.9,72.3,41.1C63.6,53.3,52,63.2,39,70.1C26,77,13,80.9,-1.2,82.9C-15.3,84.8,-30.7,84.8,-43.2,77.7C-55.8,70.6,-65.6,56.4,-73.1,41.6C-80.6,26.7,-85.9,11.3,-85.2,-3.8C-84.5,-18.9,-77.8,-33.7,-67.7,-45C-57.6,-56.3,-44,-64.1,-30.1,-71.4C-16.2,-78.7,-2,-85.5,9.5,-83.4C21,-81.2,30.6,-83.6,44.7,-76.4Z"
            transform="translate(100 100)"
          />
        </svg>

        <svg
          className="pointer-events-none absolute -bottom-10 h-40 w-40 text-gold/10"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="100" cy="100" r="100" fill="currentColor" />
        </svg>

        <div className="flex h-18 items-center justify-between border-b border-border px-5">
          <RouterNavLink to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
            <img src={logo} alt="BiteBox" className="h-8 w-auto" />
          </RouterNavLink>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full text-secondary transition-colors hover:bg-primary/10"
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
          >
            <FiX size={22} aria-hidden="true" />
          </button>
        </div>

        <nav className="relative flex-1 overflow-y-auto px-4 py-6" aria-label="Mobile navigation">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <RouterNavLink
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'block rounded-lg px-4 py-3 text-base font-medium transition-colors',
                      isActive
                        ? 'bg-primary/10 text-primary'
                        : 'text-secondary/80 hover:bg-primary/5 hover:text-primary',
                    )
                  }
                >
                  {link.label}
                </RouterNavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-border px-4 py-5">
          <Button as="a" href="/shop" size="sm" className="w-full">
            Order Now
          </Button>
        </div>
      </div>
    </>
  )
}
