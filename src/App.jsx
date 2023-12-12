
import './App.css'
import { Header } from './components/Header/Header'
import { Banner } from './components/Banner'
import { ItemSection } from './components/ItemSection'
import { CartProvider } from './context/cart'
import Footer from './components/Footer'
import { Register } from './components/Pages/Register'
import Login from './components/Pages/Login'
import { Route, Routes } from 'react-router-dom'
import { NewProduct } from './components/Products/NewProduct'
import { FiltersProvider } from './context/filters'
import { useProducts } from './hooks/useProducts'
import { Checkout } from './components/Pages/Checkout'
import ProductSlider from './components/ProductSlider'
import { Products } from './components/Pages/Products'
import { Payment } from './components/Pages/Payment'
import { OrderDashboard } from './components/Pages/OrderDashboard'
import { EditProduct } from './components/Products/EditProduct'
import { About } from './components/Pages/About'
import { Home } from './components/Pages/Home'
import { Toast } from './components/Toast'

function App() {

  return (
      <div className='bg-mint-100'>
        <CartProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path='/newproduct' element={<NewProduct />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order" element={<Payment />} />
            <Route path="/products" element={<FiltersProvider><Products /></FiltersProvider>} />
            <Route path="/orderdashboard" element={<OrderDashboard />} />
            <Route path="/editproduct/:id" element={<EditProduct />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </CartProvider>
        <Footer></Footer>
      </div>
    
  )
}

export default App
