import { useState } from "react"
export default function Filters( { onChange }) {

    const [maxPrice, setMaxPrice] = useState(1000)

    const handleMaxChange = (event) => {
        setMaxPrice(event.target.value)
        onChange(prevState => ({
            ...prevState,
            maxPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        onChange(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return(
        <section className="flex items-center justify-between text-sm [&>*]:flex [&>*]:gap-4 p-4">
            <div>
                <label htmlFor="price">Precio</label>
                <input type="range" id="price" min={0} max={10000} onChange={handleMaxChange} value={maxPrice} step={1000} />
                <span>${maxPrice}</span>
            </div>
            <div>
                <label htmlFor="category">Categoría</label>
                <select id="category" onChange={handleChangeCategory}>
                    <option value='all'>Todos</option>
                    <option value='estanterias'>Estanterias</option>
                    <option value='decorados'>Decorados</option>
                </select>
            </div>
        </section>
    )
}