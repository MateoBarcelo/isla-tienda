import { useState, useEffect } from 'react'
import MenuLinks from './MenuLinks.jsx'
import { Cart } from '../Cart.jsx'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/auth.jsx'
import UserButton from './UserButton.jsx'

export function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const { accessToken, admin } = useAuth()

    const handleMobileMenu = () => {
        setIsOpen(!isOpen)
    }

    const location = useLocation()

    useEffect(() => {
        setIsOpen(false)
    }, [location])

    const renderMobileMenu = () => {
        return (
            <div>     
                <ul className={`flex flex-col justify-center z-50 w-screen h-screen fixed top-0 left-0 bg-mint-900 text-mint-100 text-3xl font-sans font-bold items-center transition-all ${isOpen ? 'transform translate-x-0 opacity-100' : 'transform translate-x-full opacity-0'} transition-all duration-500 opacity-95`}>
                    <Link to="/">
                        <img src='/logowhite.png' className='w-[200px] -mt-12 py-10' alt="Logo Isla" />
                    </Link>
                    <MenuLinks />
                    {accessToken ? (                
                    <div className='pt-4 flex space-x-10'>
                        <li>
                            <button className={`relative w-[34px] h-[34px] text-xl p-1 flex items-center justify-center bg-[#F5F7F4] text-mint-900 rounded-lg shadow-md`} onClick={handleMobileMenu}>
                                ✕
                            </button>
                        </li>
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
                                <button className='bg-mint-900 text-mint-50 px-3 py-1 text-sm rounded-lg shadow-md transform active:translate-y-1 transition-all'>
                                    Iniciar sesión
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to='/register'>
                                <button className='bg-white text-mint-900 px-3 py-1 text-sm rounded-lg shadow-md transform active:translate-y-1 transition-all'>
                                    Registrarse
                                </button>
                            </Link>
                        </li>
                    </div>
                    )}         
                </ul>
            </div>
        )
    }

    
    return(
        <header className='w-full shadow-[rgba(13,_38,_76,_0.19)_0px_5px_20px] relative h-[70px] md:h-[90px] bg-mint-50 px-6 md:px-10 lg:px-28 flex justify-between items-center' data-aos="fade-right" data-aos-easing="ease-out-cubic">
            <Link to='/'>
                <img src='/logo.png' alt='Logo Isla' className='w-[165px]'/>
            </Link>
            <ul className='hidden md:flex space-x-14 text-mint-900 font-sans font-bold items-center'>
                <li class="relative hover:text-mint-700 transition-colors duration-300 w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-mint-700 cursor-pointer after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                    <Link to='/'>
                        Inicio
                    </Link>
                </li>
                <li class="relative hover:text-mint-700 transition-colors duration-300 w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-mint-700 cursor-pointer after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                    <Link to="/products">
                        Productos
                    </Link>
                </li>
                <li class="relative hover:text-mint-700 transition-colors duration-300 w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-mint-700 cursor-pointer after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                    <Link to="/about">
                        Nosotros
                    </Link>     
                </li>
                <li class="relative hover:text-mint-700 transition-colors duration-300 w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-mint-700 cursor-pointer after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                    <a href="/about/#contact">
                    Contacto
                    </a>
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
                {renderMobileMenu()}
            </div>
        </header>
    )
}