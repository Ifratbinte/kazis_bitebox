import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { CONTACT } from '@/constants/site'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const name = data.get('name') as string
    const email = data.get('email') as string
    const phone = data.get('phone') as string
    const message = data.get('message') as string

    const subject = encodeURIComponent(`Contact from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\n\nMessage:\n${message}`,
    )

    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-card border border-success/30 bg-success/5 p-6 text-center">
        <h3 className="font-display text-lg font-semibold text-secondary">Email client opened</h3>
        <p className="mt-2 text-sm text-text-muted">
          Your email app should have opened with the message pre-filled. Just hit send!
          If it didn't open, you can reach us directly at{' '}
          <a href={`mailto:${CONTACT.email}`} className="text-primary underline">
            {CONTACT.email}
          </a>
          .
        </p>
        <Button variant="outline" className="mt-4" onClick={() => setSubmitted(false)}>
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input id="contact-name" name="name" type="text" label="Name" required />
      <Input id="contact-email" name="email" type="email" label="Email" required />
      <Input id="contact-phone" name="phone" type="tel" label="Phone" />
      <Textarea id="contact-message" name="message" label="Message" required rows={4} />
      <Button type="submit" className="w-full btn-press">
        Send Message
      </Button>
    </form>
  )
}
