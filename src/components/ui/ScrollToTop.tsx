import { useState, useEffect } from 'react'
import { FiArrowUp } from 'react-icons/fi'
import { cn } from '@/utils/cn'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:scale-110 btn-press',
        isVisible ? 'translate-y-0 opacity-100 scroll-top-bounce' : 'translate-y-4 opacity-0 pointer-events-none',
      )}
      aria-label="Scroll to top"
    >
      <FiArrowUp size={20} />
    </button>
  )
}
