import React, { useState, useEffect } from 'react';
import { useProducts } from '../hooks/useProducts';

const Product = ({product}) => {
    return (
        <li key={product.id} className="flex flex-col text-left shadow-xl rounded-lg bg-[#F5F7F4] text-mint-900 p-3 md:p-5">
            <div className="relative group">
                <img src={product.thumbnail} alt={product.title} className="rounded-md w-full aspect-square block object-cover bg-white mb-3" />
                </div>
            <div>
                <h3 className="text-lg md:text-xl font-medium">{product.title}</h3>
            </div>
            <span className="text-xl md:text-2xl font-semibold opacity-90">
                <p>${product.price}</p>
            </span>
            <span>
                <p className='text-sm md:text-lg'>{product.measures}</p>
            </span>
        </li>
    )
}
const SLIDE_INTERVAL = 5000
const TRANSITION_DURATION = 300
const ProductSlider = ({products}) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const [slide, setSlide] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setSlide(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 4) % products.length);
                setSlide(false);
            }, TRANSITION_DURATION);
        }, SLIDE_INTERVAL);

        return () => {clearInterval(interval);};
    }, [products]);

    return (
        <div className="overflow-hidden">
            <div className={`grid grid-cols-2 px-12 md:grid-cols-4 md:px-32 gap-4 relative transition-transform duration-500 ease-in-out transform ${slide ? 'leaveLeft' : 'enterRight'}`}>
                {products.slice(currentIndex, currentIndex + 4).map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductSlider;
