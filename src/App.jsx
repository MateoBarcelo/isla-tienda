import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CartIcon } from './components/Icons'
import { Products } from './components/Products'
import { products as initialProducts } from './mocks/products.json'
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
function App() {

  const Home = () => {
    //const [products] = useState(initialProducts)
    const [filterProducts, setFilters] = useFilters()
  
    const {products} = useProducts()
    return (
      <>
        <Banner/>
        <ItemSection />
        <section className='flex flex-col text-center md:flex-row md:text-left justify-between items-center md:px-32 p-12'>
            <div>
                <h1 className='md:text-3xl text-4xl text-mint-900 font-semibold'>Nuestros productos</h1>
                <p className='text-lg text-mint-900'>Encontrá calidad al mejor precio</p>
            </div>
              <Filters />
        </section>
      
        <Products products={filterProducts(products)} />
      </>
    )
  }
  return (
      <div className='bg-mint-100'>
        <CartProvider>
          <Header />
          <Routes>
            <Route path='/' element={<FiltersProvider><Home /></FiltersProvider>} />
            <Route path='/register' element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path='/newproduct' element={<NewProduct />} />
          </Routes>
        </CartProvider>
        <Footer></Footer>
      </div>
    
  )
}

export default App
