import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { NAV_LINKS, FOOTER_LEGAL_LINKS, SITE, CONTACT } from '@/constants/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-secondary text-white">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-xl font-semibold">{SITE.name}</p>
          <p className="mt-3 max-w-xs text-sm text-white/70">{SITE.description}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/50">
            Quick Links
          </p>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-sm text-white/80 hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/50">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>{CONTACT.phone}</li>
            <li>{CONTACT.address}</li>
            <li>
              <a href={CONTACT.facebook} className="hover:text-accent">
                Facebook
              </a>
            </li>
            <li>
              <a href={CONTACT.messenger} className="hover:text-accent">
                Messenger
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/50">Legal</p>
          <ul className="mt-4 space-y-2">
            {FOOTER_LEGAL_LINKS.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-sm text-white/80 hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container>
          <p className="text-center text-xs text-white/50">
            © {year} {SITE.name}. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  )
}
