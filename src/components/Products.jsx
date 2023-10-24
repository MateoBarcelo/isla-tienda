import { AddToCartIcon } from "./Icons";

export function Products({ products }) {

    const Product = ({product}) => {
        return (
            <li key={product.id} className="flex flex-col text-left shadow-xl rounded-lg bg-[#F5F7F4] text-mint-900 p-5">
                <div className="relative group">
                    <div className="opacity-0 w-full h-[95%] transition-opacity absolute group-hover:opacity-100 bg-mint-900 bg-opacity-60 rounded-md"></div>
                    <img src={product.thumbnail} alt={product.title} className="rounded-md w-full aspect-square block object-cover bg-white mb-3" />
                    <button className="opacity-0 font-semibold rounded-lg group-hover:opacity-100 transition-opacity shadow-md bg-[#F5F7F4] w-[70%] px-4 py-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Añadir al carrito</button>
                </div>
                <div>
                    <h3 className="text-xl font-medium">{product.title}</h3>
                </div>
                <span className="text-2xl font-semibold opacity-90">
                    <p>${product.price}</p>
                </span>
                <span>
                    <p>1mt x 1.2mt x 50cm</p>
                </span>
            </li>
        )
    }

    return (
        <section className="w-full px-24 md:px-32">
            <ul className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-3">
                {products.slice(0,10).map((product) => (
                    <Product product={product} />))}
            </ul>
        </section>
    )
}