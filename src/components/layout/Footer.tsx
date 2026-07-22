import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { NAV_LINKS, FOOTER_LEGAL_LINKS, SITE, CONTACT } from '@/constants/site'
import logo from '@/assets/logo.png'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import { FaFacebookF } from 'react-icons/fa'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-[#111827f3] text-white">
      {/* ── SVG Angular Wave Top Divider ── */}
      <div className="relative -mb-1">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L48 108C96 96 192 72 288 66C384 60 480 72 576 78C672 84 768 84 864 78C960 72 1056 60 1152 60C1248 60 1344 72 1392 78L1440 84V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V120Z"
            className="fill-[#0f172a]"
          />
        </svg>
      </div>

      {/* ── Background Decorative SVG Elements ── */}
      <svg
        className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-[0.10]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="footer-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#footer-grid)" />
      </svg>

      {/* Hexagon decorative shape – top right */}
      <svg
        className="pointer-events-none absolute -right-20 top-16 h-72 w-72 text-primary/[0.2]"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="100,10 180,55 180,145 100,190 20,145 20,55"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <polygon
          points="100,30 165,65 165,135 100,170 35,135 35,65"
          fill="currentColor"
        />
      </svg>

      {/* Triangle decorative shape – bottom left */}
      <svg
        className="pointer-events-none absolute -bottom-10 h-56 w-56 text-accent/[0.2]"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="100,15 190,185 10,185"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <polygon
          points="100,50 160,165 40,165"
          fill="currentColor"
        />
      </svg>

      {/* Diamond decorative shape – center */}
      <svg
        className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 text-white/[0.02]"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="40"
          y="40"
          width="120"
          height="120"
          rx="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          transform="rotate(45 100 100)"
        />
      </svg>

      {/* ── Main Content ── */}
      <Container className="relative z-10 grid grid-cols-1 gap-12 pb-10 sm:grid-cols-2 lg:grid-cols-12">
        {/* Brand Column */}
        <div className="lg:col-span-4">
          <img src={logo} alt="BiteBox" className="h-9 w-auto" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
            {SITE.description}
          </p>

          {/* Social Links */}
          <div className="mt-6 flex gap-3">
            <a
              href={CONTACT.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white"
              aria-label="Facebook"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href={CONTACT.messenger}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:bg-[#006AFF] hover:text-white"
              aria-label="Messenger"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.886 1.434 5.462 3.676 7.137V22l3.37-1.851c.903.252 1.866.388 2.954.388 5.523 0 10-4.145 10-9.243S17.523 2 12 2zm1.08 12.488l-2.535-2.713L5.5 14.488l5.428-5.76 2.62 2.713 4.97-2.713-5.438 5.76z" />
              </svg>
            </a>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:bg-[#25D366] hover:text-white"
              aria-label="WhatsApp"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-2">
          <h3 className="relative mb-5 text-sm font-semibold uppercase tracking-widest text-white">
            <span className="relative">
              Explore
              <span className="absolute -bottom-1 left-0 h-0.5 w-8 bg-primary" />
            </span>
          </h3>
          <ul className="space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="group flex items-center gap-2 text-sm text-gray-400 transition-colors duration-200 hover:text-accent"
                >
                  <span className="inline-block h-px w-0 bg-accent transition-all duration-300 group-hover:w-2" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-3">
          <h3 className="relative mb-5 text-sm font-semibold uppercase tracking-widest text-white">
            <span className="relative">
              Get in Touch
              <span className="absolute -bottom-1 left-0 h-0.5 w-8 bg-primary" />
            </span>
          </h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <FiPhone className="mt-0.5 shrink-0 text-primary" size={15} />
              <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="hover:text-accent transition-colors">
                {CONTACT.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <FiMail className="mt-0.5 shrink-0 text-primary" size={15} />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-accent transition-colors">
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <FiMapPin className="mt-0.5 shrink-0 text-primary" size={15} />
              <span>{CONTACT.address}</span>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div className="lg:col-span-3">
          <h3 className="relative mb-5 text-sm font-semibold uppercase tracking-widest text-white">
            <span className="relative">
              Policies
              <span className="absolute -bottom-1 left-0 h-0.5 w-8 bg-primary" />
            </span>
          </h3>
          <ul className="space-y-3">
            {FOOTER_LEGAL_LINKS.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="group flex items-center gap-2 text-sm text-gray-400 transition-colors duration-200 hover:text-accent"
                >
                  <span className="inline-block h-px w-0 bg-accent transition-all duration-300 group-hover:w-2" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mini CTA */}
          <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-xs font-medium text-white">Ready to order?</p>
            <p className="mt-1 text-xs text-gray-500">Fresh frozen food delivered to your door.</p>
            <Link
              to="/shop"
              className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-accent transition-colors hover:text-primary"
            >
              Order Now
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </Container>

      {/* ── Bottom Bar with SVG Zigzag ── */}
      <div className="relative border-t border-white/[0.06]">
        <svg
          className="absolute left-0 top-0 -translate-y-full"
          viewBox="0 0 1440 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ width: '100%', height: '24px' }}
        >
          <path
            d="M0 24L30 20L60 24L90 20L120 24L150 20L180 24L210 20L240 24L270 20L300 24L330 20L360 24L390 20L420 24L450 20L480 24L510 20L540 24L570 20L600 24L630 20L660 24L690 20L720 24L750 20L780 24L810 20L840 24L870 20L900 24L930 20L960 24L990 20L1020 24L1050 20L1080 24L1110 20L1140 24L1170 20L1200 24L1230 20L1260 24L1290 20L1320 24L1350 20L1380 24L1410 20L1440 24"
            stroke="rgba(193,39,45,0.15)"
            strokeWidth="1"
          />
        </svg>

        <Container className="flex flex-col items-center justify-between gap-3 py-6 sm:flex-row">
          <p className="text-xs text-gray-500">
            &copy; {year} {SITE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <span>Crafted with</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#C1272D" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            for <span className='text-gold'>Kazi's BiteBox</span>
          </div>
        </Container>
      </div>
    </footer>
  )
}
