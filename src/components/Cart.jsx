import { useState, useContext, useEffect } from "react";
import CartButton from "./Header/CartButton";
import { useCart } from "../hooks/useCart";
import { CartItem } from './Cart/CartItem'
import Button from "./Button";
import { Link } from "react-router-dom";
import { CartIcon } from "./Icons";

export function Cart() {

    const {cart, removeFromCart, addToCart, clearCart, total} = useCart()

    const [cartOpen, setCartOpen] = useState(false);


    return(
        <>
            <label htmlFor="a" className=''>
                <CartButton onClick={() => setCartOpen(!cartOpen)} />
            </label>
            <aside className={`fixed z-50 overflow-y-scroll top-0 left-auto w-full md:w-1/4 right-0 bg-mint-700 h-full text-mint-50 p-10 justify-start peer-checked:flex [box-shadow:_-7px_-2px_19px_-5px_rgba(0,0,0,0.51)] ${cartOpen ? 'transform translate-x-0 opacity-100' : 'transform translate-x-full opacity-0'} transition-all duration-500 [scrollbar-width:none]`}>
                <div className="flex justify-between">
                    <button onClick={() => setCartOpen(false)} className="px-2 rounded-lg text-mint-700 text-xl shadow-lg bg-mint-300">Volver</button>
                    <button onClick={() => clearCart()} className="px-2 rounded-lg text-mint-700 text-xl shadow-lg bg-mint-300">Limpiar</button>
                </div>
                
                <div className="w-full flex space-y-4 flex-col justify-center items-center pt-8">
                    <a href='/checkout'>
                        <button className={`bg-mint-900 hover:bg-mint-700 active:transform active:translate-y-1'} w-auto text-xl py-2 px-4 rounded-md text-mint-50 font-semibold hover:text-white transition-all`}
                            onClick={() => setCartOpen(true)}>
                                <div className="flex w-full">
                                    <p className="pr-2">Ir a comprar</p>
                                    <CartIcon color="white" />
                                </div>
                               
                        </button>
                    </a>
                    <p className="text-2xl md:text-lg">Total: ${total}</p>
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