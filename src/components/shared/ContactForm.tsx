import { useState } from 'react'
import { Button } from '@/components/ui/Button'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-card border border-success/30 bg-success/5 p-6 text-center">
        <h3 className="font-display text-lg font-semibold text-secondary">Message received</h3>
        <p className="mt-2 text-sm text-text-muted">
          Thanks for reaching out — for the fastest response, message us directly on Messenger or
          WhatsApp and we'll get back to you right away.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="text-sm font-semibold text-secondary">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          className="mt-1.5 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm outline-none focus:border-primary"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-semibold text-secondary">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          className="mt-1.5 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm outline-none focus:border-primary"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-semibold text-secondary">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={4}
          className="mt-1.5 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm outline-none focus:border-primary"
        />
      </div>
      <Button type="submit" className="w-full">
        Send Message
      </Button>
    </form>
  )
}
