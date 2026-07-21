import { useState, useCallback } from 'react'
import type { Product } from '@/types'

export function useOrderModal() {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null)

  const openOrderModal = useCallback((product: Product) => setActiveProduct(product), [])
  const closeOrderModal = useCallback(() => setActiveProduct(null), [])

  return { activeProduct, openOrderModal, closeOrderModal }
}
