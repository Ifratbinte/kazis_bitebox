import { useState, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollToTop } from '@/components/ui/ScrollToTop'
import { cn } from '@/utils/cn'

export function MainLayout() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    if (!isHomePage) return

    function handleScroll() {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar transparent={isHomePage} />
      <main
        key={location.pathname}
        className={cn('flex-1 page-enter', isHomePage && !isScrolled ? '' : 'pt-18')}
      >
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
