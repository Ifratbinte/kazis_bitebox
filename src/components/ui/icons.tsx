type IconProps = { className?: string }

export function SnowflakeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 2v20M4 7l16 10M20 7L4 17M12 2l-2.5 2.5M12 2l2.5 2.5M12 22l-2.5-2.5M12 22l2.5-2.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" className={className} fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function LeafIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" className={className} fill="none" aria-hidden="true">
      <path
        d="M5 19c8 0 14-6 14-14-8 0-14 6-14 14zM5 19c0-4 2-8 6-11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function TruckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" className={className} fill="none" aria-hidden="true">
      <path
        d="M3 7h11v9H3zM14 11h4l3 3v2h-7zM7 19a1.6 1.6 0 100-3.2A1.6 1.6 0 007 19zM17.5 19a1.6 1.6 0 100-3.2 1.6 1.6 0 000 3.2z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function MessageIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" className={className} fill="none" aria-hidden="true">
      <path
        d="M4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8c-1.3 0-2.6-.3-3.7-.9L4 20l1-4.4C4.4 14.4 4 13.2 4 12z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 3l7 3v6c0 5-3 8-7 9-4-1-7-4-7-9V6z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function StarIcon({ className, filled }: IconProps & { filled?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      className={className}
      fill={filled ? 'var(--color-accent)' : 'none'}
      aria-hidden="true"
    >
      <path
        d="M12 3l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6z"
        stroke="var(--color-accent)"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  )
}
