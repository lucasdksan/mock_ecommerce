import { BrowserRouter, Route, Routes } from 'react-router'
import { Layout } from './components/Layout'
import { CartProvider } from './context/CartContext'
import { HomePage } from './pages/HomePage'
import { PdpPage } from './pages/PdpPage'
import { PlpPage } from './pages/PlpPage'

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="feminino" element={<PlpPage />} />
            <Route path=":slug/p" element={<PdpPage />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}
