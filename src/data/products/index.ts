import type { Product } from '@/types'
import { momoProducts } from './momos'
import { rollProducts } from './rolls'

export const products: Product[] = [...momoProducts, ...rollProducts]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getRelatedProducts(slug: string): Product[] {
  return products.filter((p) => p.slug !== slug)
}
