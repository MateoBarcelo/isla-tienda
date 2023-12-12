import { useAuth } from "../context/auth";
import { useCart } from "../hooks/useCart";
import { EditIcon } from "./Icons";
import { useState } from "react";
import { Toast } from "./Toast";
import productService from "../services/product";

const Product = ({product, setShow, showToast}) => {
    
    const {cart, removeFromCart, addToCart} = useCart()
    const {validToken, accessToken, admin} = useAuth()

    const isProductInCart = (product) => {
        return cart.some(item => item.id === product.id)
    }

    const onCartAdded = () => {
        if(validToken()) {
            addToCart(product)
            //Toast showed when product is added to cart
            setShow(true)
            setTimeout(() => {
                setShow(false)
                
            }, 3000)
        } else {
            window.location.href="/login?ref=products"
        }

    }
    return (
        <li key={product.id} className="flex flex-col text-left shadow-xl relative rounded-lg bg-[#F5F7F4] text-mint-900 p-3 md:p-5">
            <div className="relative group">
                <div className="opacity-0 w-full h-[95%] transition-opacity absolute group-hover:opacity-100 bg-mint-900 bg-opacity-60 rounded-md"></div>
                <img src={product.thumbnail} alt={product.title} className="rounded-md w-full aspect-square block object-cover bg-white mb-3" />
                {!isProductInCart(product) 
                    ? <button onClick={onCartAdded} className="opacity-0 font-semibold rounded-lg group-hover:opacity-100 transition-opacity shadow-md bg-[#F5F7F4] w-[70%] px-4 py-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Añadir al carrito</button>
                    : <button onClick={() => removeFromCart(product)} className="opacity-0 font-semibold rounded-lg group-hover:opacity-100 transition-opacity shadow-md bg-[#F5F7F4] w-[70%] px-4 py-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Quitar del carrito</button>}
                
                </div>
                <div>
                <Toast className={`${showToast ? 'zoomIn' : 'zoomOut'} `}>
                    <div className="flex flex-row space-x-2 items-center">
                        <svg width="28" height="21" viewBox="0 0 44 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.4 34.9C15.256 34.9 15.95 34.206 15.95 33.35C15.95 32.4939 15.256 31.8 14.4 31.8C13.5439 31.8 12.85 32.4939 12.85 33.35C12.85 34.206 13.5439 34.9 14.4 34.9Z" stroke="#1F443D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M26.8 34.9C27.656 34.9 28.35 34.206 28.35 33.35C28.35 32.4939 27.656 31.8 26.8 31.8C25.944 31.8 25.25 32.4939 25.25 33.35C25.25 34.206 25.944 34.9 26.8 34.9Z" stroke="#1F443D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2 7H7.425C7.425 7 8.06506 9.83407 8.47517 11.65C9.29464 15.2785 10.4201 20.2621 11.0805 23.1859C11.3997 24.5992 12.6547 25.6 14.1036 25.6H27.4133C28.8663 25.6 30.1243 24.5908 30.4394 23.1725L33 11.65" stroke="#1F443D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M33 11.65H8.97498" stroke="#1F443D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M38.5 2V9" stroke="#1F443D" stroke-width="3" stroke-linecap="round"/>
                            <path d="M42 5.5L35 5.5" stroke="#1F443D" stroke-width="3" stroke-linecap="round"/>
                        </svg>
                        <p className="text-lg">Producto agregado!</p>
                    </div>
                </Toast>
                </div>
                
            <div>
                <h3 className="text-lg md:text-xl font-medium">{product.title}</h3>
            </div>
            <span className="text-xl md:text-2xl font-semibold opacity-90">
                <p>${product.price}</p>
            </span>
            <span className="flex justify-between items-center">
                <p className="text-sm md:text-lg">{product.measures}</p>
                <button onClick={onCartAdded} className={`relative w-[34px] h-[34px] p-1 flex items-center justify-center bg-[#F5F7F4] rounded-lg shadow-md`}>
                <svg width="44" height="37" viewBox="0 0 44 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.4 34.9C15.256 34.9 15.95 34.206 15.95 33.35C15.95 32.4939 15.256 31.8 14.4 31.8C13.5439 31.8 12.85 32.4939 12.85 33.35C12.85 34.206 13.5439 34.9 14.4 34.9Z" stroke="#1F443D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M26.8 34.9C27.656 34.9 28.35 34.206 28.35 33.35C28.35 32.4939 27.656 31.8 26.8 31.8C25.944 31.8 25.25 32.4939 25.25 33.35C25.25 34.206 25.944 34.9 26.8 34.9Z" stroke="#1F443D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2 7H7.425C7.425 7 8.06506 9.83407 8.47517 11.65C9.29464 15.2785 10.4201 20.2621 11.0805 23.1859C11.3997 24.5992 12.6547 25.6 14.1036 25.6H27.4133C28.8663 25.6 30.1243 24.5908 30.4394 23.1725L33 11.65" stroke="#1F443D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M33 11.65H8.97498" stroke="#1F443D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M38.5 2V9" stroke="#1F443D" stroke-width="3" stroke-linecap="round"/>
                    <path d="M42 5.5L35 5.5" stroke="#1F443D" stroke-width="3" stroke-linecap="round"/>
                </svg>
                </button>
            </span>
            {admin && 
            <div className="absolute -top-2 -right-2 flex space-x-2">     
                <button onClick={() => {productService.deleteProduct(product.id, accessToken); window.location.reload()}} className={`relative w-[34px] h-[34px] p-1 flex items-center justify-center bg-[#F5F7F4] rounded-lg shadow-md`}>
                    <svg width="23" height="23" viewBox="0 0 167 167" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M62.3008 62.3007H72.6842V124.601H62.3008V62.3007Z" fill="#1F443D"/>
                        <path d="M93.4509 62.3007H103.834V124.601H93.4509V62.3007Z" fill="#1F443D"/>
                        <path d="M20.7668 31.1503V41.5338H31.1503V145.368C31.1503 148.122 32.2443 150.763 34.1915 152.71C36.1388 154.658 38.7799 155.752 41.5337 155.752H124.601C127.355 155.752 129.996 154.658 131.944 152.71C133.891 150.763 134.985 148.122 134.985 145.368V41.5338H145.368V31.1503H20.7668ZM41.5337 145.368V41.5338H124.601V145.368H41.5337Z" fill="#1F443D"/>
                        <path d="M62.3008 10.3834H103.835V20.7669H62.3008V10.3834Z" fill="#1F443D"/>
                    </svg>
                </button>
                <a href={`/editproduct/${product.id}`}>
                <button className={`relative w-[34px] h-[34px] p-1 flex items-center justify-center bg-[#F5F7F4] rounded-lg shadow-md`}>
                    <EditIcon />
                </button>
                </a>
            </div>}
        </li>
    )
}

export function Products({ products }) {

    const [showToast, setShowToast] = useState(false)

    return (
        <section className="w-full px-24 md:px-32">
            <ul className="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-3">
                {products.map((product) => (
                    <Product key={product.id} product={product} showToast={showToast} setShow={setShowToast} />))}
            </ul>
        </section>
    )
}