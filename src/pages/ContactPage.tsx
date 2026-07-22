import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ContactForm } from '@/components/shared/ContactForm'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { cn } from '@/utils/cn'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import { CONTACT } from '@/constants/site'
import { FaWhatsapp } from 'react-icons/fa'
import { TbBrandMessenger } from "react-icons/tb";

const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7296.745357399539!2d90.38232470628317!3d23.876400012646183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c413e891ad29%3A0x98211bdb93d8dec1!2sSector%2011%2C%20Dhaka%201230!5e0!3m2!1sen!2sbd!4v1784630453168!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin'

const contactLinks = [
  {
    href: `https://wa.me/${CONTACT.whatsapp.replace(/\s+/g, '')}`,
    target: '_blank',
    rel: 'noopener noreferrer',
    hoverClass: 'hover:border-[#25D366]/40',
    icon: <FaWhatsapp size={20} />,
    label: 'WhatsApp',
    sublabel: 'Fastest way to reach us',
  },
  {
    href: CONTACT.messenger,
    target: '_blank',
    rel: 'noopener noreferrer',
    hoverClass: 'hover:border-[#006AFF]/40',
    icon: <TbBrandMessenger size={20} />,
    label: 'Facebook Messenger',
    sublabel: '@Kazis-BiteBox',
  },
  {
    href: `tel:${CONTACT.phone.replace(/\s+/g, '')}`,
    hoverClass: 'hover:border-primary/40',
    icon: <FiPhone size={20} />,
    label: 'Phone',
    sublabel: CONTACT.phone,
  },
  {
    href: `mailto:${CONTACT.email}`,
    hoverClass: 'hover:border-primary/40',
    icon: <FiMail size={20} />,
    label: 'Email',
    sublabel: CONTACT.email,
  },
]

export function ContactPage() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div ref={ref}>
    <Container className="py-16">
      <div className={cn('anim-fade-up', isVisible && 'is-visible')}>
        <SectionTitle
          eyebrow="Contact"
          title="We'd love to hear from you"
          description="For the fastest response, message us on Messenger or WhatsApp. For anything else, use the form below."
        />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          {contactLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              target={link.target}
              rel={link.rel}
              className={cn('card-hover flex items-center gap-4 rounded-card border border-border bg-surface p-5', link.hoverClass, 'anim-fade-up', isVisible && 'is-visible')}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 hover:scale-110">
                {link.icon}
              </span>
              <div>
                <p className="font-semibold text-secondary">{link.label}</p>
                <p className="text-sm text-text-muted">{link.sublabel}</p>
              </div>
            </a>
          ))}

          <div className={cn('flex items-center gap-4 rounded-card border border-border bg-surface p-5 anim-fade-up', isVisible && 'is-visible')} style={{ transitionDelay: '500ms' }}>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <FiMapPin size={20} />
            </span>
            <div>
              <p className="font-semibold text-secondary">Address</p>
              <p className="text-sm text-text-muted">{CONTACT.address}</p>
            </div>
          </div>

          <div className={cn('overflow-hidden rounded-card border border-border anim-scale-in', isVisible && 'is-visible')} style={{ transitionDelay: '600ms' }}>
            <iframe
              title="Kazi's BiteBox location — Uttara, Sector 11, Dhaka"
              src={MAP_EMBED_URL}
              className="h-64 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className={cn('rounded-card border border-border bg-surface p-6 anim-fade-right', isVisible && 'is-visible')} style={{ transitionDelay: '300ms' }}>
          <h2 className="font-display text-lg font-semibold text-secondary">Send us a message</h2>
          <div className="mt-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </Container>
    </div>
  )
}
