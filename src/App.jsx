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
import { FiltersContext } from './context/filters'


function App() {

  const [products] = useState(initialProducts)
  const [filterProducts, setFilters] = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <div className='bg-mint-100'>
      <Header />

      <Banner/>
      <ItemSection />
      <section className='flex flex-col text-center md:flex-row md:text-left justify-between items-center md:px-32 p-12'>
          <div>
              <h1 className='md:text-3xl text-4xl text-mint-900 font-semibold'>Nuestros productos</h1>
              <p className='text-lg text-mint-900'>Encontrá calidad al mejor precio</p>
          </div>
          <Filters />
      </section>
      <Products products={filteredProducts} />
      
    </div>
  )
}

export default App
