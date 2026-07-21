import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '@/layouts/MainLayout'
import { HomePage } from '@/pages/HomePage'
import { ShopPage } from '@/pages/ShopPage'
import { ProductDetailsPage } from '@/pages/ProductDetailsPage'
import { AboutPage } from '@/pages/AboutPage'
import { FAQPage } from '@/pages/FAQPage'
import { DeliveryPage } from '@/pages/DeliveryPage'
import { ContactPage } from '@/pages/ContactPage'
import { PrivacyPage } from '@/pages/PrivacyPage'
import { TermsPage } from '@/pages/TermsPage'
import { RefundPage } from '@/pages/RefundPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'shop', element: <ShopPage /> },
      { path: 'shop/:slug', element: <ProductDetailsPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'faq', element: <FAQPage /> },
      { path: 'delivery', element: <DeliveryPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'privacy-policy', element: <PrivacyPage /> },
      { path: 'terms', element: <TermsPage /> },
      { path: 'refund-policy', element: <RefundPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
