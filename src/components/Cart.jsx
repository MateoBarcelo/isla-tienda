import { useState, useContext, useEffect } from "react";
import CartButton from "./Header/CartButton";
import { useCart } from "../hooks/useCart";
import { CartItem } from './Cart/CartItem'
import Button from "./Button";
import { Link } from "react-router-dom";


export function Cart() {

    const {cart, removeFromCart, addToCart, clearCart} = useCart()

    const [cartOpen, setCartOpen] = useState(false);


    return(
        <>
            <label htmlFor="a" className=''>
                <CartButton onClick={() => setCartOpen(!cartOpen)} />
            </label>
            <aside className={`fixed z-50 overflow-y-scroll top-0 left-auto w-full md:w-1/5 right-0 bg-mint-700 h-full text-mint-50 p-10 justify-start peer-checked:flex [box-shadow:_-7px_-2px_19px_-5px_rgba(0,0,0,0.51)] ${cartOpen ? 'transform translate-x-0 opacity-100' : 'transform translate-x-full opacity-0'} transition-all duration-500 [scrollbar-width:none]`}>
                <div className="flex justify-between">
                    <button onClick={() => setCartOpen(false)} className="px-2 rounded-lg text-mint-700 shadow-lg bg-mint-300 mr-3">Volver</button>
                    <button onClick={() => clearCart()} className="px-2 rounded-lg text-mint-700 shadow-lg bg-mint-300 mr-3">Limpiar</button>
                </div>
                
                <div className="w-full flex justify-center items-center pt-8">
                    <a href='/checkout'>
                        <Button onClick={() => setCartOpen(false)} title={"Ir a comprar"} />
                    </a>
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