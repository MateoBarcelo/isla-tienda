export function CartItem({thumbnail, title, price, quantity, addToCart, removeFromCart}) {
    return (
        <li className='flex justify-center items-center md:items-left py-6 flex-col space-y-2'>
            <img className='aspect-square w-[60%] md:w-full object-cover p-3 bg-mint-50 rounded-md block' src={thumbnail} alt={title} />

            <div className='flex flex-col'>
                <strong className='text-xl md:text-lg font-medium'>{title}</strong>
                <span className='text-2xl md:text-lg font-semibold'>${price}</span>
            </div>

            <footer className='flex justify-between items-center mx-8 bg-mint-100 rounded-md text-mint-900 text-2xl md:text-xl'>
                <button onClick={addToCart} className='mx-3'>+</button>
                <span className='bg-mint-50 px-6 font-medium'>{quantity}</span>
                <button onClick={removeFromCart} className='mx-3'>-</button>
            </footer>
        </li>
    )
}