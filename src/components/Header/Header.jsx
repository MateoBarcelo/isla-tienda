import Filters from '../Filters.jsx'
import { CartIcon, UserIcon } from '../Icons.jsx'
import { useState, useId, useContext } from 'react'
import MenuLinks from './MenuLinks.jsx'
import CartButton from './CartButton.jsx'
import { Cart } from '../Cart.jsx'
import { CartContext } from '../../context/cart.jsx'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/auth.jsx'
import UserButton from './UserButton.jsx'

export function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const { accessToken } = useAuth()

    const handleMobileMenu = () => {
        setIsOpen(!isOpen)
    }

    const renderMobileMenu = () => {
        return (
            <div>
                
                <ul className='flex flex-col justify-center z-50 w-screen h-screen absolute top-0 left-0 bg-mint-900 text-mint-100 text-3xl font-sans font-bold items-center transition-all'>
                    <img src='logowhite.png' className='w-[200px] -mt-12 py-10' alt="" />
                    <MenuLinks />
                    <li className='flex space-x-10 p-10'>
                       <CartButton />
                        <button className='w-[34px] h-[34px] p-1 flex items-center justify-center bg-[#F5F7F4] rounded-lg shadow-md text-mint-900 text-2xl' onClick={handleMobileMenu}>
                            ✕
                        </button>
                    </li>
                   
                </ul>
            </div>
        )
    }

    
    return(
        <header className='w-full h-[70px] md:h-[90px] bg-mint-50 px-28 flex justify-between items-center'>
            <img src='logo.png' alt='Logo Isla' className='w-[165px]'/>
            <ul className='hidden md:flex space-x-14 text-mint-900 font-sans font-bold items-center'>
                <li>
                    <Link to='/'>
                    Inicio
                    </Link>
                </li>
                <li>
                    Productos
                </li>
                <li>
                    Nosotros
                </li>
                <li>
                    Contacto
                </li>
                {accessToken ? (                
                    <div className='flex space-x-10'>
                        <li>
                        <Cart />
                        </li>
                        <li>
                        <button className={`relative w-[34px] h-[34px] p-1 flex items-center justify-center bg-[#F5F7F4] rounded-lg shadow-md`}>
                            <UserButton />
                        </button>
                        </li>
                    </div>
                    ) : (
                    <div className='flex space-x-4'>
                        <li>
                            <Link to='/login'>
                                <button className='bg-white border-mint-900 text-mint-900 px-3 py-1 text-sm rounded-lg shadow-md transform active:translate-y-1 transition-all'>
                                    Iniciar sesión
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to='/register'>
                                <button className='bg-mint-900 text-mint-50 px-3 py-1 text-sm rounded-lg shadow-md transform active:translate-y-1 transition-all'>
                                    Registrarse
                                </button>
                            </Link>
                        </li>
                    </div>
                    )}
            </ul>
    
            <div className='md:hidden'>
                <button className='text-mint-900 font-bold text-2xl' onClick={handleMobileMenu}>
                    ☰
                </button>
                {isOpen && renderMobileMenu()}
            </div>
        </header>
    )
}