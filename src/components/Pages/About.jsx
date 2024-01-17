import axios from 'axios'
import { useState } from "react";
import Button from "../Button";

export function About() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState(sessionStorage.getItem("user") || "");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        service_id: 'service_y89w1y8',
        template_id: 'template_2d7jrkb',
        user_id: 'DWtOYNFn1innytrUX',
        template_params: {
          'from_email': email,
          'from_name': name,
          'message': message,
        }
    };

      const response = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data)
      if(response.status == 200) {
        alert("Mensaje enviado correctamente")
      } else {
        alert("Hubo un error al enviar el mensaje")
      }
    }

    return(
        <>
        <section className="w-full flex justify-center items-center">
          <div className="container px-12 py-6 md:px-24">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <img
                src="/logo.png"
                width={500}
                height={500}
                alt="Foto del taller"
                data-aos="fade-left" data-aos-duration="1000"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4" data-aos="fade-right" data-aos-duration="2000">
                <div className="space-y-4 text-center md:text-left">
                  <h1 className="text-4xl font-bold text-mint-900 tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Sobre <br></br>Nosotros
                  </h1>
                  <p className="max-w-[600px] font-light text-mint-900 md:text-xl dark:text-mint-900">
                    Somos un taller de carpintería artesanal que se dedica a la fabricación de muebles a medida. Nuestro objetivo es brindar un servicio personalizado y de calidad, con el fin de satisfacer las necesidades de nuestros clientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-mint-300">
          <div className="container px-12 md:px-6" data-aos="fade-left" data-aos-duration="2000">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-8">
                <h2 className="text-3xl text-mint-900 font-bold tracking-tighter sm:text-5xl">
                  ¿Cómo comenzó todo?
                </h2>
                <p className="max-w-[900px] text-mint-900 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                "Todo inició con productos pequeños como cajoncitos organizadores que además los pintabamos artesanalmente. 
                Desde una habitación, los pedidos fueron creciendo hasta llegar a ocupar toda la casa nos convertimos de a poco, con mucha dedicación en lo que somos hoy" 
                <br></br><br></br>En Isla creamos y atendemos cada detalle.
                Seleccionamos calidad de madera de pino para la elaboración de nuestros productos y brindamos funcionabillidad, precisión en nuestras medidas y buen precio. 
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id='contact'>
          <div className="container px-12 md:px-6" data-aos="fade-right" data-aos-duration="2000">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-3">
                <h1 className="text-3xl font-bold tracking-tighter md:text-5xl text-mint-900">
                  Contactanos
                </h1>
                <p className="max-w-xl text-mint-900 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  ¿Necesitás un presupuesto, tenés alguna duda o querés saber más sobre nuestros muebles? ¡Escribinos!
                </p>
              </div>
              <div className="mx-auto w-full max-w-md space-y-2">
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-mint-300 text-gray-700 placeholder-gray-600 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-lg flex-1"
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                  />
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-mint-300 text-gray-700 placeholder-gray-600 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-lg flex-1"
                    placeholder="Correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                  />
                  <textarea
                    placeholder="Mensaje"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full h-24 px-3 py-2 text-base bg-mint-300 text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
                    defaultValue={""}
                  />
                  <button
                    className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-mint-900 text-white px-6 py-2 rounded-md hover:bg-mint-700 transform active:translate-y-1"
                    type="submit"
                  >
                    Enviar
                  </button>
                </form>
              </div>
              <Button className={'flex flex-row space-x-2 w-auto items-center'}>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
                  <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(10.66667,10.66667)"><path d="M12.01172,2c-5.506,0 -9.98823,4.47838 -9.99023,9.98438c-0.001,1.76 0.45998,3.47819 1.33398,4.99219l-1.35547,5.02344l5.23242,-1.23633c1.459,0.796 3.10144,1.21384 4.77344,1.21484h0.00391c5.505,0 9.98528,-4.47937 9.98828,-9.98437c0.002,-2.669 -1.03588,-5.17841 -2.92187,-7.06641c-1.886,-1.887 -4.39245,-2.92673 -7.06445,-2.92773zM12.00977,4c2.136,0.001 4.14334,0.8338 5.65234,2.3418c1.509,1.51 2.33794,3.51639 2.33594,5.65039c-0.002,4.404 -3.58423,7.98633 -7.99023,7.98633c-1.333,-0.001 -2.65341,-0.3357 -3.81641,-0.9707l-0.67383,-0.36719l-0.74414,0.17578l-1.96875,0.46484l0.48047,-1.78516l0.2168,-0.80078l-0.41406,-0.71875c-0.698,-1.208 -1.06741,-2.58919 -1.06641,-3.99219c0.002,-4.402 3.58528,-7.98437 7.98828,-7.98437zM8.47656,7.375c-0.167,0 -0.43702,0.0625 -0.66602,0.3125c-0.229,0.249 -0.875,0.85208 -0.875,2.08008c0,1.228 0.89453,2.41503 1.01953,2.58203c0.124,0.166 1.72667,2.76563 4.26367,3.76563c2.108,0.831 2.53614,0.667 2.99414,0.625c0.458,-0.041 1.47755,-0.60255 1.68555,-1.18555c0.208,-0.583 0.20848,-1.0845 0.14648,-1.1875c-0.062,-0.104 -0.22852,-0.16602 -0.47852,-0.29102c-0.249,-0.125 -1.47608,-0.72755 -1.70508,-0.81055c-0.229,-0.083 -0.3965,-0.125 -0.5625,0.125c-0.166,0.25 -0.64306,0.81056 -0.78906,0.97656c-0.146,0.167 -0.29102,0.18945 -0.54102,0.06445c-0.25,-0.126 -1.05381,-0.39024 -2.00781,-1.24024c-0.742,-0.661 -1.24267,-1.47656 -1.38867,-1.72656c-0.145,-0.249 -0.01367,-0.38577 0.11133,-0.50977c0.112,-0.112 0.24805,-0.2915 0.37305,-0.4375c0.124,-0.146 0.167,-0.25002 0.25,-0.41602c0.083,-0.166 0.04051,-0.3125 -0.02149,-0.4375c-0.062,-0.125 -0.54753,-1.35756 -0.76953,-1.85156c-0.187,-0.415 -0.3845,-0.42464 -0.5625,-0.43164c-0.145,-0.006 -0.31056,-0.00586 -0.47656,-0.00586z"></path></g></g>
                  </svg>
                  <a target="_blank" href={`https://wa.me/5493424067248`}>
                      Consultar por WhatsApp
                  </a>
              </Button>  
            </div>
          </div>
        </section>
      </>
      

    )
}