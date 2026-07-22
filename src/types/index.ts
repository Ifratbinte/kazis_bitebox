export interface ProductPackSize {
  label: string
  weight: string
  price: number
}

export interface Product {
  id: string
  slug: string
  name: string
  category: string
  tagline: string
  description: string
  images: string[]
  ingredients: string[]
  storage: string
  cookingInstructions: string[]
  shelfLife?: string
  packSizes: ProductPackSize[]
  isBestSeller?: boolean
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}

export interface Testimonial {
  id: string
  name: string
  location: string
  quote: string
  quoteEn: string
  rating: number
}

export interface NavLink {
  label: string
  path: string
}

export type OrderChannel = 'messenger' | 'whatsapp' | 'phone'

export interface OrderRequest {
  productName: string
  packSize: string
  quantity: number
}
