import { cn } from '@/utils/cn'

interface CategoryFilterProps {
  categories: string[]
  active: string
  onChange: (category: string) => void
}

export function CategoryFilter({ categories, active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onChange(category)}
          className={cn(
            'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
            active === category
              ? 'border-primary bg-primary text-white'
              : 'border-border text-secondary hover:border-primary/50',
          )}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
