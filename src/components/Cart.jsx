import { useId } from "react";
import { CartIcon, RemoveFromCartIcon, ClearCartIcon } from "./Icons";
import CartButton from "./Header/CartButton";

export function Cart() {

    return(
        <>
            <label htmlFor="a" className=''>
                <CartButton />
            </label>
            <aside className="hidden fixed z-50 overflow-y-scroll top-0 left-auto w-full md:w-1/5 right-0 bg-mint-700 h-full text-mint-50 p-10 justify-start peer-checked:flex [box-shadow:_-7px_-2px_19px_-5px_rgba(0,0,0,0.51)]">
                <ul className='mt-4'>
                    <li className='flex justify-center items-center md:items-left py-6 flex-col space-y-4'>
                        <img className='aspect-square w-1/2 md:w-full object-cover p-3 bg-mint-50 rounded-md block' src="https://i.dummyjson.com/data/products/30/thumbnail.jpg" alt="" />

                        <div className='flex flex-col'>
                            <strong className='text-3xl md:text-xl font-medium'>Estantería mediana</strong>
                            <span className='text-2xl md:text-lg font-semibold'>$1500</span>
                            <span className='font-normal'>1.5mt x 1mt x 40cm</span>
                        </div>

                        <footer className='flex justify-between items-center mx-8 bg-mint-100 rounded-md text-mint-900 text-xl'>
                            <button className='mx-3'>+</button>
                            <span className='bg-mint-50 px-6 font-medium'>1</span>
                            <button className='mx-3'>-</button>
                        </footer>

                        <div className='w-1/2 md:w-full border border-mint-100'></div>
                    </li>
                </ul>
            </aside>
        </>
    )
}