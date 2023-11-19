import Button from './Button'

export function Banner() {

    const handleButton = () => {
    }

    return (
        <section className="w-full h-[120vh] sm:h-[140vh] md:h-[70vh] grid md:grid-cols-2 grid-cols-1 bg-mint-300">
            <div className="flex flex-col justify-center items-center">
                <span className="flex flex-col justify-center items-center text-center md:text-left md:block mt-20 space-y-4 md:mt-0 md:space-y-6 text-mint-900">
                    <h1 className="text-5xl md:text-5xl font-bold tracking-wide">Bienvenido a isla</h1>
                    <p className="text-2xl md:text-2xl font-regular">Los mejores artículos en madera del <br></br>mercado, a precios muy accesibles!</p>
                    <Button onClick={handleButton} title="Ver catálogo" />                
                </span>
            </div>
            <div className="flex justify-center items-center">
                <img src="woodimages.png" alt="Ejemplos de trabajos en madera" className="mt-10 md:mt-0 w-[70%] md:w-[80%]" />
            </div>
        </section>
    )
}