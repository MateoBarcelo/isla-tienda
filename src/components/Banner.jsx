import Button from './Button'
import { useState, useEffect } from 'react';

const TRANSITION_DURATION = 200
const SLIDE_INTERVAL = 4000
const images = [
    'banner.webp',
    'banner2.webp',
    'banner3.webp',
    'banner4.webp',
    'banner5.webp',
    'banner6.webp',
]
export function Banner() {


    const [currentIndex, setCurrentIndex] = useState(0);

    const [slide, setSlide] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setSlide(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                setSlide(false);
            }, TRANSITION_DURATION);
        }, SLIDE_INTERVAL);

        return () => {clearInterval(interval);};
    }, [images]);


   return <div className='h-auto w-full py-16 relative flex flex-wrap justify-center md:justify-end'>
          <div data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="500" className='bg-mint-25 w-full lg:w-3/4 lg:rounded-tl-full lg:rounded-bl-full py-12 px-12 md:px-32 flex flex-col justify-center items-center md:items-end lg:items-center'>
            <p className='font-semibold text-4xl text-mint-900 text-center'>
              Bienvenido a isla
            </p>
            <p className='py-4 leading-7 text-center text-2xl tracking-wide font-light text-mint-900'>
              Los mejores artículos en madera del <br></br> mercado, a precios muy accesibles!
            </p>
            <div className='w-[70%] h-[2px] bg-mint-900'></div>
            <div className='flex justify-center text-mint-900 space-x-6 md:space-x-12 pt-6 items-center'>
              <div className='flex space-x-2 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256">
                  <g fill="#63B0A5" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(10.66667,10.66667)"><path d="M19.077,4.928c-2.082,-2.083 -4.922,-3.134 -7.904,-2.894c-4.009,0.322 -7.523,3.11 -8.699,6.956c-0.84,2.748 -0.487,5.617 0.881,7.987l-1.296,4.303c-0.124,0.413 0.253,0.802 0.67,0.691l4.504,-1.207c1.459,0.796 3.101,1.215 4.773,1.216h0.004c4.195,0 8.071,-2.566 9.412,-6.541c1.306,-3.876 0.34,-7.823 -2.345,-10.511zM16.898,15.554c-0.208,0.583 -1.227,1.145 -1.685,1.186c-0.458,0.042 -0.887,0.207 -2.995,-0.624c-2.537,-1 -4.139,-3.601 -4.263,-3.767c-0.125,-0.167 -1.019,-1.353 -1.019,-2.581c0,-1.228 0.645,-1.832 0.874,-2.081c0.229,-0.25 0.499,-0.312 0.666,-0.312c0.166,0 0.333,0 0.478,0.006c0.178,0.007 0.375,0.016 0.562,0.431c0.222,0.494 0.707,1.728 0.769,1.853c0.062,0.125 0.104,0.271 0.021,0.437c-0.083,0.166 -0.125,0.27 -0.249,0.416c-0.125,0.146 -0.262,0.325 -0.374,0.437c-0.125,0.124 -0.255,0.26 -0.11,0.509c0.146,0.25 0.646,1.067 1.388,1.728c0.954,0.85 1.757,1.113 2.007,1.239c0.25,0.125 0.395,0.104 0.541,-0.063c0.146,-0.166 0.624,-0.728 0.79,-0.978c0.166,-0.25 0.333,-0.208 0.562,-0.125c0.229,0.083 1.456,0.687 1.705,0.812c0.25,0.125 0.416,0.187 0.478,0.291c0.062,0.103 0.062,0.603 -0.146,1.186z"></path></g></g>
                </svg>
                <a href="https://wa.me/5493424067248" target='_blank' className="relative hover:text-mint-700 text-sm md:text-lg transition-colors duration-300 w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-mint-700 cursor-pointer after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                  +54 9 342 406-7248
                </a>
              </div>
              <div className='flex space-x-2 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256">
                <g fill="#63B0A5" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M16,3c-7.17,0 -13,5.83 -13,13v18c0,7.17 5.83,13 13,13h18c7.17,0 13,-5.83 13,-13v-18c0,-7.17 -5.83,-13 -13,-13zM37,11c1.1,0 2,0.9 2,2c0,1.1 -0.9,2 -2,2c-1.1,0 -2,-0.9 -2,-2c0,-1.1 0.9,-2 2,-2zM25,14c6.07,0 11,4.93 11,11c0,6.07 -4.93,11 -11,11c-6.07,0 -11,-4.93 -11,-11c0,-6.07 4.93,-11 11,-11zM25,16c-4.96,0 -9,4.04 -9,9c0,4.96 4.04,9 9,9c4.96,0 9,-4.04 9,-9c0,-4.96 -4.04,-9 -9,-9z"></path></g></g>
                </svg>
                <a href="https://www.instagram.com/isla.maderas/" target='_blank' className="relative text-sm md:text-lg hover:text-mint-700 transition-colors duration-300 w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-mint-700 cursor-pointer after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                  @isla.maderas
                </a>
              </div>
            </div>
          </div>
          <div data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="500" className='md:absolute md:top-12 md:mt-0 -mt-6 [border-width:24px] p-1 border-mint-700 left-[10%] w-[300px] h-[300px] rounded-full bg-mint-100'>
            <img src={images[currentIndex]} className={`rounded-full w-full h-full object-cover ${slide ? 'zoomOut' : 'zoomIn'}`} alt="" />
          </div>
        </div>
}
export function BannerAnt() {

    return (
        <section className="w-full h-auto grid md:grid-cols-2 grid-cols-1 bg-mint-300">
            <div className="flex flex-col justify-center items-center px-12 pb-16 md:pb-0">
                <span className="flex flex-col justify-center items-center text-center md:text-left md:block mt-20 space-y-4 md:mt-0 md:space-y-6 text-mint-900" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                    <h1 className="text-5xl md:text-3xl lg:text-5xl font-bold tracking-wide">Bienvenido a isla</h1>
                    <p className="text-2xl md:text-lg lg:text-2xl font-regular">Los mejores artículos en madera del <br></br>mercado, a precios muy accesibles!</p>
                    <Button onClick={() => window.location.href="/products"} title="Ver catálogo" />                
                </span>
            </div>
            <div className="flex justify-center items-center">
                <img src="woodimages.png" alt="Ejemplos de trabajos en madera" className="mt-0 w-[80%] py-10 pr-12 hidden md:block" data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000"/>
            </div>
        </section>
    )
}