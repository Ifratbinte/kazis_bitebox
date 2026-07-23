import { createContext, useContext, useReducer, useEffect, type ReactNode } from 'react'
import type { CartItem, CustomerInfo, Order } from '@/types'

interface OrderContextValue {
  orders: Order[]
  placeOrder: (items: CartItem[], customer: CustomerInfo, total: number) => Order
  getOrderById: (id: string) => Order | undefined
}

const OrderContext = createContext<OrderContextValue | null>(null)

const STORAGE_KEY = 'bitebox-orders'

function generateOrderId(): string {
  const now = new Date()
  const datePart = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`
  const rand = Math.random().toString(36).substring(2, 6).toUpperCase()
  return `BB-${datePart}-${rand}`
}

type OrderAction = { type: 'PLACE_ORDER'; payload: Order } | { type: 'LOAD_ORDERS'; payload: Order[] }

function orderReducer(state: { orders: Order[] }, action: OrderAction): { orders: Order[] } {
  switch (action.type) {
    case 'PLACE_ORDER':
      return { orders: [action.payload, ...state.orders] }
    case 'LOAD_ORDERS':
      return { orders: action.payload }
    default:
      return state
  }
}

function loadOrders(): Order[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

export function OrderProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(orderReducer, { orders: [] }, () => ({ orders: loadOrders() }))

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.orders))
  }, [state.orders])

  function placeOrder(items: CartItem[], customer: CustomerInfo, total: number): Order {
    const order: Order = {
      id: generateOrderId(),
      items,
      customer,
      total,
      status: 'pending',
      createdAt: new Date().toISOString(),
    }
    dispatch({ type: 'PLACE_ORDER', payload: order })
    return order
  }

  function getOrderById(id: string): Order | undefined {
    return state.orders.find((o) => o.id === id)
  }

  return (
    <OrderContext.Provider value={{ orders: state.orders, placeOrder, getOrderById }}>
      {children}
    </OrderContext.Provider>
  )
}

export function useOrders() {
  const ctx = useContext(OrderContext)
  if (!ctx) throw new Error('useOrders must be used within an OrderProvider')
  return ctx
}
