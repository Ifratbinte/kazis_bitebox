import { useState, useEffect, useCallback } from 'react'
import type { Testimonial } from '@/types'
import { TestimonialCard } from '@/components/home/TestimonialCard'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

interface TestimonialSliderProps {
  testimonials: Testimonial[]
}

export function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(1)
  const [isPaused, setIsPaused] = useState(false)

  const maxIndex = Math.max(0, testimonials.length - visibleCount)

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }, [maxIndex])

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex))
  }

  useEffect(() => {
    function updateVisibleCount() {
      if (window.innerWidth >= 1024) {
        setVisibleCount(3)
      } else if (window.innerWidth >= 768) {
        setVisibleCount(2)
      } else {
        setVisibleCount(1)
      }
    }

    updateVisibleCount()
    window.addEventListener('resize', updateVisibleCount)
    return () => window.removeEventListener('resize', updateVisibleCount)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(goToNext, 4000)
    return () => clearInterval(interval)
  }, [goToNext, isPaused])

  const translatePercent = (currentIndex * 100) / visibleCount

  return (
    <div className="relative px-2" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      <div className="overflow-hidden rounded-card">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${translatePercent}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-full flex-shrink-0 px-3 md:w-1/2 lg:w-1/3"
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={goToPrevious}
        className="absolute -left-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-surface p-2 shadow-md transition-colors hover:bg-primary/10 sm:-left-4"
        aria-label="Previous testimonial"
      >
        <FiChevronLeft size={20} className="text-secondary" />
      </button>
      <button
        type="button"
        onClick={goToNext}
        className="absolute -right-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-surface p-2 shadow-md transition-colors hover:bg-primary/10 sm:-right-4"
        aria-label="Next testimonial"
      >
        <FiChevronRight size={20} className="text-secondary" />
      </button>

      {/* Dots Navigation */}
      <div className="mt-6 flex justify-center gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-6 bg-primary' : 'w-2 bg-border hover:bg-primary/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
