import { Banner } from '../Banner'
import { ItemSection } from '../ItemSection'
import ProductSlider from '../ProductSlider'
import { useProducts } from '../../hooks/useProducts'
import { Skeleton } from '../Products/Skeleton'

export function Home() {
  
        const {products, loading} = useProducts()
        return (
          <>
            <Banner />
            <ItemSection />
            <section className='flex flex-col text-center md:flex-row md:text-left justify-between items-center md:px-16 lg:px-32 p-12'>
                <div>
                    <h1 className='md:text-3xl text-4xl text-mint-900 font-semibold'>Nuestros productos</h1>
                    <p className='text-lg text-mint-900'>Encontrá calidad al mejor precio</p>
                </div>
            </section>
            {loading 
                ? 
                <div className='px-16 md:px-32 flex gap-4'>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </div>
                :
                <ProductSlider products={products} />}
            <div className='flex items-center justify-center py-10'>
              <button onClick={() => window.location.href="/products"} className={`bg-mint-900 hover:bg-mint-700 active:transform active:translate-y-1 w-1/2 md:w-auto py-2 px-8 text-xl rounded-md text-mint-50 font-semibold hover:text-white transition-all`}
              >
                  Ver todos
              </button>
            </div>
            
          </>
        )
}