import { useFilters } from "../../hooks/useFilters"
import { useProducts } from "../../hooks/useProducts"
import { Products as ProductList } from "../Products"
import Filters from "../Filters"
import { Skeleton } from "../Products/Skeleton"
export function Products() {

    const [filterProducts] = useFilters()
    const {products, loading} = useProducts()

    return (
        <main>
            <section className='flex flex-col text-center md:flex-row md:text-left justify-between items-center md:px-32 p-12' data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                <div>
                    <h1 className='md:text-3xl text-4xl text-mint-900 font-semibold'>Nuestros productos</h1>
                    <p className='text-lg text-mint-900'>Encontrá calidad al mejor precio</p>
                </div>
                <Filters />
            </section>
            {loading ? 
            <div className="w-100 px-16 grid grid-cols-1 md:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-3 md:px-32">
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
            </div>
            : <ProductList products={filterProducts(products)} />}
        </main>
    )
} 