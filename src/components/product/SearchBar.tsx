import { FiSearch } from 'react-icons/fi'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function SearchBar({ value, onChange, placeholder = 'Search products...' }: SearchBarProps) {
  return (
    <div className="relative w-full sm:max-w-xs">
      <FiSearch
        size={16}
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
        aria-hidden="true"
      />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Search products"
        className="w-full rounded-full border border-border bg-surface py-2.5 pl-9 pr-4 text-sm text-text outline-none focus:border-primary"
      />
    </div>
  )
}
