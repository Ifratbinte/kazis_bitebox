import { cn } from '@/utils/cn'

interface LoadingSkeletonProps {
  className?: string
  count?: number
}

export function LoadingSkeleton({ className, count = 1 }: LoadingSkeletonProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={cn('animate-pulse rounded-card bg-secondary/10', className)}
          aria-hidden="true"
        />
      ))}
    </>
  )
}
