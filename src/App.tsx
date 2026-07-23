import { RouterProvider } from 'react-router-dom'
import { CartProvider } from '@/context/CartContext'
import { OrderProvider } from '@/context/OrderContext'
import { router } from '@/routes'

function App() {
  return (
    <OrderProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </OrderProvider>
  )
}

export default App
