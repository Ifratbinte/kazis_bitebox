import { forwardRef } from 'react'
import { cn } from '@/utils/cn'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, required, className, id, ...props }, ref) => {
    return (
      <div>
        <label htmlFor={id} className="text-sm font-semibold text-secondary">
          {label}
          {required && <span className="ml-0.5 text-primary">*</span>}
        </label>
        <textarea
          ref={ref}
          id={id}
          required={required}
          className={cn(
            'mt-1.5 w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm outline-none focus:border-primary',
            error && 'border-error focus:border-error',
            className,
          )}
          {...props}
        />
        {error && <p className="mt-1 text-xs text-error">{error}</p>}
      </div>
    )
  },
)

Textarea.displayName = 'Textarea'
