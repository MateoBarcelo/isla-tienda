import { createContext, useState } from "react";

export const FiltersContext = createContext()

export const MAX_PRICE = 300000

export function FiltersProvider({ children }) {
    const [filters, setFilters] = useState({
        category: 'all',
        maxPrice: 300000
      })
      
    return(
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    )

}