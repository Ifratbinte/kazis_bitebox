import { createContext, useContext, useReducer, useEffect, type ReactNode } from 'react'
import type { CartItem } from '@/types'

interface CartState {
  items: CartItem[]
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: { productId: string; packLabel: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: string; packLabel: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: CartItem[] }

interface CartContextValue extends CartState {
  addItem: (item: CartItem) => void
  removeItem: (productId: string, packLabel: string) => void
  updateQuantity: (productId: string, packLabel: string, quantity: number) => void
  clearCart: () => void
  itemCount: number
  total: number
}

const CartContext = createContext<CartContextValue | null>(null)

const STORAGE_KEY = 'bitebox-cart'

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(
        (i) => i.productId === action.payload.productId && i.packLabel === action.payload.packLabel,
      )
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.productId === action.payload.productId && i.packLabel === action.payload.packLabel
              ? { ...i, quantity: i.quantity + action.payload.quantity }
              : i,
          ),
        }
      }
      return { ...state, items: [...state.items, action.payload] }
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(
          (i) => !(i.productId === action.payload.productId && i.packLabel === action.payload.packLabel),
        ),
      }
    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            (i) => !(i.productId === action.payload.productId && i.packLabel === action.payload.packLabel),
          ),
        }
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.productId === action.payload.productId && i.packLabel === action.payload.packLabel
            ? { ...i, quantity: action.payload.quantity }
            : i,
        ),
      }
    }
    case 'CLEAR_CART':
      return { ...state, items: [] }
    case 'LOAD_CART':
      return { ...state, items: action.payload }
    default:
      return state
  }
}

function loadCart(): CartItem[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] }, () => ({ items: loadCart() }))

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items))
  }, [state.items])

  const addItem = (item: CartItem) => dispatch({ type: 'ADD_ITEM', payload: item })
  const removeItem = (productId: string, packLabel: string) =>
    dispatch({ type: 'REMOVE_ITEM', payload: { productId, packLabel } })
  const updateQuantity = (productId: string, packLabel: string, quantity: number) =>
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, packLabel, quantity } })
  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0)
  const total = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  return (
    <CartContext.Provider value={{ items: state.items, addItem, removeItem, updateQuantity, clearCart, itemCount, total }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}
