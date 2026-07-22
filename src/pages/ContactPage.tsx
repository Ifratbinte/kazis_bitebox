import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ContactForm } from '@/components/shared/ContactForm'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import { CONTACT } from '@/constants/site'
import { FaWhatsapp } from 'react-icons/fa'
import { TbBrandMessenger } from "react-icons/tb";

const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7296.745357399539!2d90.38232470628317!3d23.876400012646183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c413e891ad29%3A0x98211bdb93d8dec1!2sSector%2011%2C%20Dhaka%201230!5e0!3m2!1sen!2sbd!4v1784630453168!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin'

export function ContactPage() {
  return (
    <Container className="py-16">
      <SectionTitle
        eyebrow="Contact"
        title="We'd love to hear from you"
        description="For the fastest response, message us on Messenger or WhatsApp. For anything else, use the form below."
      />

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          <a
            href={`https://wa.me/${CONTACT.whatsapp.replace(/\s+/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-card border border-border bg-surface p-5 hover:border-[#25D366]/40"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <FaWhatsapp size={20} />
            </span>
            <div>
              <p className="font-semibold text-secondary">WhatsApp</p>
              <p className="text-sm text-text-muted">Fastest way to reach us</p>
            </div>
          </a>

          <a
            href={CONTACT.messenger}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-card border border-border bg-surface p-5 hover:border-[#006AFF]/40"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <TbBrandMessenger  size={20} />
            </span>
            <div>
              <p className="font-semibold text-secondary">Facebook Messenger</p>
              <p className="text-sm text-text-muted">@kazisbitebox</p>
            </div>
          </a>

          <a
            href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-4 rounded-card border border-border bg-surface p-5 hover:border-primary/40"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <FiPhone size={20} />
            </span>
            <div>
              <p className="font-semibold text-secondary">Phone</p>
              <p className="text-sm text-text-muted">{CONTACT.phone}</p>
            </div>
          </a>

          <a
            href={`mailto:${CONTACT.email}`}
            className="flex items-center gap-4 rounded-card border border-border bg-surface p-5 hover:border-primary/40"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <FiMail size={20} />
            </span>
            <div>
              <p className="font-semibold text-secondary">Email</p>
              <p className="text-sm text-text-muted">{CONTACT.email}</p>
            </div>
          </a>

          <div className="flex items-center gap-4 rounded-card border border-border bg-surface p-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <FiMapPin size={20} />
            </span>
            <div>
              <p className="font-semibold text-secondary">Address</p>
              <p className="text-sm text-text-muted">{CONTACT.address}</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-card border border-border">
            <iframe
              title="Kazi's BiteBox location — Uttara, Sector 11, Dhaka"
              src={MAP_EMBED_URL}
              className="h-64 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="rounded-card border border-border bg-surface p-6">
          <h2 className="font-display text-lg font-semibold text-secondary">Send us a message</h2>
          <div className="mt-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </Container>
  )
}
