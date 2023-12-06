import axios from 'axios'
import { useEffect } from "react";
import { useState } from "react";

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
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold text-mint-900 tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Sobre <br></br>Nosotros
                  </h1>
                  <p className="max-w-[600px] font-light text-mint-900 md:text-xl dark:text-mint-900">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
                    lorem sit amet nulla hendrerit ultrices. Donec aliquet, ipsum in
                    gravida ornare, purus ipsum porta nunc, in varius ante lorem nec
                    tortor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-mint-300">
          <div className="container px-12 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-8">
                <h2 className="text-3xl text-mint-900 font-bold tracking-tighter sm:text-5xl">
                  ¿Quienes somos?
                </h2>
                <p className="max-w-[900px] text-mint-900 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  euismod, augue at pellentesque semper, ligula turpis volutpat lacus,
                  at posuere purus nulla nec mauris.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-12 md:px-6">
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
            </div>
          </div>
        </section>
      </>
      

    )
}