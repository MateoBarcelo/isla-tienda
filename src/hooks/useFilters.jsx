import { useContext, useState } from "react"
import { FiltersContext } from "../context/filters"

export function useFilters() {
    const {filters, setFilters} = useContext(FiltersContext)
    
    const filterProducts = (products) => { 
        return products.filter(product => {
            return Number.parseFloat(product.price) <= filters.maxPrice && (filters.category === 'all' || product.category === filters.category)
      })
    }
  
    return [filterProducts, setFilters]
  }