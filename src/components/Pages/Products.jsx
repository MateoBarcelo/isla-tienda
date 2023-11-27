import { useFilters } from "../../hooks/useFilters"
import { useProducts } from "../../hooks/useProducts"
import { Products as ProductList } from "../Products"
import Filters from "../Filters"
export function Products() {

    const [filterProducts] = useFilters()
    const {products} = useProducts()

    return (
        <main>
            <section className='flex flex-col text-center md:flex-row md:text-left justify-between items-center md:px-32 p-12'>
                <div>
                    <h1 className='md:text-3xl text-4xl text-mint-900 font-semibold'>Nuestros productos</h1>
                    <p className='text-lg text-mint-900'>Encontrá calidad al mejor precio</p>
                </div>
                <Filters />
            </section>
            <ProductList products={filterProducts(products)} />
        </main>
    )
} 