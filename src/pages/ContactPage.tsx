import { Container } from '@/components/ui/Container'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ContactForm } from '@/components/shared/ContactForm'
import { MessageIcon, TruckIcon } from '@/components/ui/icons'
import { CONTACT } from '@/constants/site'

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
            href={CONTACT.messenger}
            className="flex items-center gap-4 rounded-card border border-border bg-surface p-5 hover:border-primary/40"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <MessageIcon />
            </span>
            <div>
              <p className="font-semibold text-secondary">Facebook Messenger</p>
              <p className="text-sm text-text-muted">Fastest way to reach us</p>
            </div>
          </a>

          <a
            href={CONTACT.facebook}
            className="flex items-center gap-4 rounded-card border border-border bg-surface p-5 hover:border-primary/40"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <MessageIcon />
            </span>
            <div>
              <p className="font-semibold text-secondary">Facebook Page</p>
              <p className="text-sm text-text-muted">@kazisbitebox</p>
            </div>
          </a>

          <div className="flex items-center gap-4 rounded-card border border-border bg-surface p-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <TruckIcon />
            </span>
            <div>
              <p className="font-semibold text-secondary">Phone / WhatsApp</p>
              <p className="text-sm text-text-muted">{CONTACT.phone}</p>
            </div>
          </div>

          <div className="rounded-card border border-border bg-surface p-5">
            <p className="font-semibold text-secondary">Email</p>
            <p className="text-sm text-text-muted">{CONTACT.email}</p>
          </div>

          <div className="rounded-card border border-border bg-surface p-5">
            <p className="font-semibold text-secondary">Address</p>
            <p className="text-sm text-text-muted">{CONTACT.addressPlaceholder}</p>
          </div>

          <div className="flex aspect-video items-center justify-center rounded-card border border-dashed border-border bg-accent/5 text-sm text-text-muted">
            Map placeholder
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
