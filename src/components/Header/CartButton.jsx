import { useCart } from '../../hooks/useCart.jsx'
import { CartIcon } from '../Icons/Icons.jsx'
const CartButton = ({ className, onClick }) => {
    const { cart } = useCart()
    return (
        <button onClick={onClick} className={`relative w-[34px] h-[34px] p-1 flex items-center justify-center bg-[#F5F7F4] rounded-lg shadow-md ${className}`}>
            {cart?.length > 0 && (
                <div className='absolute -top-2 -right-2 w-[18px] h-[18px] flex items-center justify-center shadow-lg bg-mint-700 rounded-md text-[12px] font-bold text-mint-50'>
                    {cart?.length}
                </div>
            )}
            <CartIcon />
        </button>
    )
}

export default CartButton