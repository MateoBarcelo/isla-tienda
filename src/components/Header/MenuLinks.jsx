
import { Link } from 'react-router-dom'

const MenuLinks = () => {
    return (
        <div className='space-y-4 text-center md:text-start md:space-y-0'>
                <li>
                    <Link to="/">
                         Inicio
                    </Link>      
                </li>
                <li>
                    <Link to="/products">
                         Productos
                    </Link> 
                </li>
                <li>
                    <Link to="/about">
                        Nosotros
                    </Link>
                </li>
                <li>
                    <Link to="/about/#contact">
                        Contacto
                    </Link>
                </li>
        </div>
    )
}

export default MenuLinks