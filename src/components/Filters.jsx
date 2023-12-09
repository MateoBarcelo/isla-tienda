import { useContext, useState } from "react"
import { FiltersContext } from "../context/filters"
import { CategorySelector } from "./CategorySelector"
export default function Filters() {

    const { filters, setFilters } = useContext(FiltersContext)

    const handleMaxChange = (event) => {
        setFilters(prevState => ({
            ...prevState,
            maxPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return(
        <section className="flex items-center relative space-x-12 text-sm [&>div]:flex [&>*]:gap-4 border-mint-900">
            <div className="flex-col justify-center items-center">
                <label htmlFor="price" className="text-center text-lg text-mint-900 -mb-3">Precio máximo</label>
                <input type="range" id="price" className="w-[125px] appearance-none h-0.5 bg-mint-500 rounded-lg [&::-moz-range-thumb]:bg-mint-900 [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:h-[8px] [&::-moz-range-thumb]:w-[8px]
             [&::-webkit-slider-thumb]:border-none [&::-webkit-slider-thumb]:h-[8px] [&::-webkit-slider-thumb]:w-[8px] [&::-moz-range-progress]:bg-mint-900" min={0} max={80000} 
                onChange={handleMaxChange} value={filters.maxPrice} step={2500} />
                <span className="text-mint-900 absolute -bottom-4 text-center text-lg font-semibold text-opacity-70">${filters.maxPrice}</span>
            </div>
            <div className="categoryselector">
                <CategorySelector onChange={handleChangeCategory} />
            </div>
        </section>
    )
}