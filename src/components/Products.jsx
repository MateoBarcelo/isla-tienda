import { useAuth } from "../context/auth";
import { useCart } from "../hooks/useCart";
import { AddToCartIcon, CartIcon, EditIcon } from "./Icons";
import { useIsAdmin } from "../hooks/useIsAdmin";
export function Products({ products }) {

    const {cart, removeFromCart, addToCart} = useCart()
    const {admin} = useIsAdmin()
    const {validToken} = useAuth()

    const isProductInCart = (product) => {
        return cart.some(item => item.id === product.id)
    }

    const Product = ({product}) => {
        return (
            <li key={product.id} className="flex flex-col text-left shadow-xl relative rounded-lg bg-[#F5F7F4] text-mint-900 p-5">
                <div className="relative group">
                    <div className="opacity-0 w-full h-[95%] transition-opacity absolute group-hover:opacity-100 bg-mint-900 bg-opacity-60 rounded-md"></div>
                    <img src={product.thumbnail} alt={product.title} className="rounded-md w-full aspect-square block object-cover bg-white mb-3" />
                    {!isProductInCart(product) 
                        ? <button onClick={() => validToken() ? addToCart(product) : window.location.href="/login?ref=products"} className="opacity-0 font-semibold rounded-lg group-hover:opacity-100 transition-opacity shadow-md bg-[#F5F7F4] w-[70%] px-4 py-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Añadir al carrito</button>
                        : <button onClick={() => removeFromCart(product)} className="opacity-0 font-semibold rounded-lg group-hover:opacity-100 transition-opacity shadow-md bg-[#F5F7F4] w-[70%] px-4 py-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Quitar del carrito</button>}
                    </div>
                <div>
                    <h3 className="text-xl font-medium">{product.title}</h3>
                </div>
                <span className="text-2xl font-semibold opacity-90">
                    <p>${product.price}</p>
                </span>
                <span className="flex justify-between items-center">
                    <p>{product.measures}</p>
                    <button onClick={() => validToken() ? addToCart(product) : window.location.href="/login?ref=products"} className={`relative w-[34px] h-[34px] p-1 flex items-center justify-center bg-[#F5F7F4] rounded-lg shadow-md`}>
                        <CartIcon />
                    </button>
                </span>
                {admin && 
                <div className="absolute -top-2 -right-2">
                    <a href={`/editproduct/${product.id}`}>
                    <button className={`relative w-[34px] h-[34px] p-1 flex items-center justify-center bg-[#F5F7F4] rounded-lg shadow-md`}>
                        <EditIcon />
                    </button>
                    </a>
                </div>}
            </li>
        )
    }

    return (
        <section className="w-full px-24 md:px-32">
            <ul className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-3">
                {products.map((product) => (
                    <Product key={product.id} product={product} />))}
            </ul>
        </section>
    )
}