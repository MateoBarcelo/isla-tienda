import { useFilters } from "./useFilters"
import { useState, useEffect } from "react"
import productService from "../services/product"
export function useProducts() {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
  
    async function fetchData() {
      setLoading(true)
      try {
        const products = await productService.getProducts()
        setProducts(products)
      } catch (error) {
        setError(error)
      }
    }

    useEffect(() => {
      fetchData()
    }, [])
  
    return { products, loading, error }
}