
import './App.css'
import Filters from './components/Filters'
import { Header } from './components/Header/Header'
import { Banner } from './components/Banner'
import { ItemSection } from './components/ItemSection'
import { useFilters } from './hooks/useFilters'
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
import Button from './components/Button'
import { Products } from './components/Pages/Products'
import { Payment } from './components/Pages/Payment'
import { OrderDashboard } from './components/Pages/OrderDashboard'
import { EditProduct } from './components/Products/EditProduct'

function App() {

  const Home = () => {
  
    const {products} = useProducts()
    return (
      <>
        <Banner/>
        <ItemSection />
        <section className='flex flex-col text-center md:flex-row md:text-left justify-between items-center md:px-16 lg:px-32 p-12'>
            <div>
                <h1 className='md:text-3xl text-4xl text-mint-900 font-semibold'>Nuestros productos</h1>
                <p className='text-lg text-mint-900'>Encontrá calidad al mejor precio</p>
            </div>
        </section>
        <ProductSlider products={products} />
        <div className='flex items-center justify-center py-10'>
          <button onClick={() => window.location.href="/products"} className={`bg-mint-900 hover:bg-mint-700 active:transform active:translate-y-1 w-1/2 md:w-auto py-2 px-8 text-xl rounded-md text-mint-50 font-semibold hover:text-white transition-all`}
          >
              Ver todos
          </button>
        </div>
        
      </>
    )
  }
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
          </Routes>
        </CartProvider>
        <Footer></Footer>
      </div>
    
  )
}

export default App
