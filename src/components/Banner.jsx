import Button from './Button'

export function Banner() {

    return (
        <section className="w-full h-auto md:h-auto grid md:grid-cols-2 grid-cols-1 bg-mint-300">
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