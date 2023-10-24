import { CartIcon } from '../Icons.jsx'
const CartButton = () => {
    return (
        <button className='w-[34px] h-[34px] p-1 flex items-center justify-center bg-[#F5F7F4] rounded-lg shadow-md'>
            <CartIcon />
        </button>
    )
}

export default CartButton