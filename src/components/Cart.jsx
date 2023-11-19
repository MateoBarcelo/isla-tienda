import { useState, useContext } from "react";
import CartButton from "./Header/CartButton";
import { useCart } from "../hooks/useCart";

function CartItem({thumbnail, title, price, quantity, addToCart, removeFromCart}) {
    return (
        <li className='flex justify-center items-center md:items-left py-6 flex-col space-y-2'>
            <img className='aspect-square w-1/2 md:w-full object-cover p-3 bg-mint-50 rounded-md block' src={thumbnail} alt={title} />

            <div className='flex flex-col'>
                <strong className='text-3xl md:text-lg font-medium'>{title}</strong>
                <span className='text-2xl md:text-lg font-semibold'>${price}</span>
            </div>

            <footer className='flex justify-between items-center mx-8 bg-mint-100 rounded-md text-mint-900 text-xl'>
                <button onClick={addToCart} className='mx-3'>+</button>
                <span className='bg-mint-50 px-6 font-medium'>{quantity}</span>
                <button onClick={removeFromCart} className='mx-3'>-</button>
            </footer>
        </li>
    )
}

export function Cart() {

    const {cart, removeFromCart, addToCart, clearCart} = useCart()

    const [cartOpen, setCartOpen] = useState(false);

    return(
        <>
            <label htmlFor="a" className=''>
                <CartButton onClick={() => setCartOpen(!cartOpen)} />
            </label>
            <aside className={`fixed z-50 overflow-y-scroll top-0 left-auto w-full md:w-1/5 right-0 bg-mint-700 h-full text-mint-50 p-10 justify-start peer-checked:flex [box-shadow:_-7px_-2px_19px_-5px_rgba(0,0,0,0.51)] ${cartOpen ? 'cartenter' : 'cartleave'} [scrollbar-width:none]`}>
                <div className="flex justify-between">
                    <button onClick={() => setCartOpen(false)} className="px-2 rounded-lg text-mint-700 shadow-lg bg-mint-300 mr-3">Volver</button>
                    <button onClick={() => clearCart()} className="px-2 rounded-lg text-mint-700 shadow-lg bg-mint-300 mr-3">Limpiar</button>
                </div>
                <ul className='mt-4'>
                    {cart.map(product => (
                        <CartItem key={product.id} {...product} addToCart={() => addToCart(product)} removeFromCart={() => removeFromCart(product)} />
                    ))}
                </ul>
            </aside>
        </>
    )
}