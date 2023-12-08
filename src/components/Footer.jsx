import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";

function Footer() {
  const iconsTab = [
    { icon: <FaFacebookF />, ref: "https://www.facebook.com/indumentariadeportivaytiempolibre" },
    { icon: <GrInstagram />, ref: "https://www.instagram.com/isla.maderas/" },
    { icon: <IoLogoWhatsapp />, ref: "https://wa.me/5493424067248" },
  ];
  return (
    <>
      <footer className="bg-mint-700 mt-12">
        <div className="container mx-auto md:px-24 md:py-10 py-6">
          {/* footer div all */}
          <div className="flex justify-between flex-col md:flex-row items-center md:items-start md:gap-[5rem] md:text-left text-center">
            {/* logo side */}
            <div className="flex flex-col items-center md:items-start justify-center w-2/3 md:w-1/2 md:p-0 py-4 gap-8">
              <img
                src="/logowhite.png"
                alt="footer_logo"
                className="w-[18rem]"
              />
              <p className="text-[15px] font-medium text-mint-100">
              La belleza auténtica de la madera de pino cobra vida en nuestros muebles.
              Isla es la tienda que estabas esperando para decorar tu espacio!
              </p>
              {/* socials */}
              <div className="flex gap-7 text-[18px] text-mint-100 justify-center md:justify-start">
                {iconsTab.map((icon, index) => {
                  return (
                    <div
                      key={index}
                      className="text-2xl bg-mint-100 p-2 rounded-full text-mint-700 hover:bg-mint-900 hover:text-mint-100 transition-colors"
                    >
                      <a href={icon.ref} target="_blank">
                        {icon.icon}
                      </a>
                    </div>
                  );
                })}
              </div>
       
            </div>

            {/* middle div */}
            <div className="flex ">
                <div className="flex flex-col gap-8 mt-4 md:mr-24 mr-12 relative text-mint-100">
                <p className="text-[22px] font-bold footer-main">Productos</p>

                <span className="top-[44px] absolute w-[7rem] h-[4px] bg-mint-900"></span>

                <p className="text-[16px] hover:text-mint-900 cursor-pointer font-semibold transition-colors duration-100">
                    Estanterías
                </p>
                <p className="text-[16px] hover:text-mint-900 cursor-pointer font-semibold transition-colors duration-100">
                    Organizadores
                </p>
                <p className="text-[16px] hover:text-mint-900 cursor-pointer font-semibold transition-colors duration-100">
                    Pedidos
                </p>
                </div>

                {/* right div */}
                <div className="flex flex-col gap-8 mt-4 relative text-mint-100">
                <p className="text-[22px] font-bold footer-main">Horarios</p>

                <span className="top-[44px] absolute w-[7rem] h-[4px] bg-mint-900"></span>

                <p className="text-[16px] font-bold">
                    Lunes a Viernes:
                </p>
                <p className="text-[16px] font-medium">
                    7:00am - 21:00pm
                </p>
                </div>
            </div>
          </div>
        </div>
        <p className="text-sm font-medium text-mint-100 opacity-80 text-center py-4">
                Política de Privacidad | © {new Date().getFullYear()} <br />{" "}
                Diseñado por {" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.radiustheme.com/"
                >
                  Mateo Barceló
                </a>
              </p>
      </footer>
    </>
  );
}

export default Footer;