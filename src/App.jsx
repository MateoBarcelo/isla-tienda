import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CartIcon } from './components/Icons'
import { Products } from './components/Products'
import { products as initialProducts } from './mocks/products.json'
import {Header} from './components/Header'

function App() {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    maxPrice: 5000
  })

  const filterProducts = (products) => { return products.filter(product => {
      return product.price <= filters.maxPrice && (filters.category === 'all' || product.category === filters.category)
    })
  }

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
    </>
  )
}

export default App
