import { CardPayment, initMercadoPago } from "@mercadopago/sdk-react";
import { useState } from "react";
import createPayment from "../../services/payment";
import bcrypt from "bcryptjs-react"
import orderService from "../../services/order";

export function CardPay({price, sendMethod }) {

    const [success, setSuccess] = useState(true)
    const refCode = sessionStorage.getItem("referralCode")
    const decryptedRefCode = bcrypt.compareSync(import.meta.env.VITE_REFERRAL_CODE, String(refCode))
    /*if(!decryptedRefCode) window.location.href = "/"*/
    sessionStorage.removeItem("referralCode")

    initMercadoPago(import.meta.env.VITE_MP_PUBLIC_KEY);
    
    const onSubmit = async (formData) => {
        const accessToken = sessionStorage.getItem("accessToken")
        const cart = JSON.parse(sessionStorage.getItem("cart"))

        const orderNumber = await orderService.getMaxOrder()
        
        formData.products = cart.map((product) => {
            return {
                id: product.id,
                title: product.title,
                quantity: product.quantity
            };
        });

        formData.send = sendMethod
        formData.number = Number(orderNumber) + 1
    
        const paymentCreated = await createPayment(JSON.stringify(formData), accessToken);
        if(paymentCreated) {
            sessionStorage.removeItem("cart")
            setSuccess(true)
        }
    };
    
    const onReady = () => {
        // callback llamado cuando el formulario de pago está listo para ser mostrado
    };

    const onError = () => {
        // callback llamado cuando ocurre un error en el formulario de pago
    };

    return (
        <div className="flex w-full md:flex-row flex-col-reverse justify-center items-center px-16 py-8 md:px-28 md:h-screen h-auto">
            {success 
                ? <div className="flex flex-col justify-center items-center space-y-4 md:-mt-24" data-aos="fade-in">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="170" height="170" viewBox="0,0,256,256">
                    <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(6.4,6.4)"><path d="M20,38.5c-10.201,0 -18.5,-8.299 -18.5,-18.5c0,-10.201 8.299,-18.5 18.5,-18.5c10.201,0 18.5,8.299 18.5,18.5c0,10.201 -8.299,18.5 -18.5,18.5z" fill="#BED9C8" stroke="none" stroke-width="1"></path><path d="M20,2c9.925,0 18,8.075 18,18c0,9.925 -8.075,18 -18,18c-9.925,0 -18,-8.075 -18,-18c0,-9.925 8.075,-18 18,-18M20,1c-10.493,0 -19,8.507 -19,19c0,10.493 8.507,19 19,19c10.493,0 19,-8.507 19,-19c0,-10.493 -8.507,-19 -19,-19z" fill="#327262" stroke="none" stroke-width="1"></path><path d="M11,20l6,6l13,-13" fill="none" stroke="#ffffff" stroke-width="2"></path></g></g>
                    </svg>                    
                    <p className="md:text-4xl text-3xl text-center font-semibold text-mint-900">¡Gracias por tu compra!</p>
                </div> 
                :
                <>
                    <span className="flex flex-col w-1/2 justify-center items-center">
                        <p className="text-4xl text-mint-900 font-semibold">Completá tu compra en Isla</p>
                        <p className="text-xl mt-2 text-mint-900 font-medium">Pagá con tarjeta de crédito o débito</p>
                        <p className="text-lg mt-4 text-mint-900 font-regular">¡Muchas gracias por tu atención!</p>
                    </span>
                    <div className="max-w-xl mt-12 flex justify-center items-center">    
                        <CardPayment
                            initialization={{ amount: price }}
                            onSubmit={onSubmit}
                            onReady={onReady}
                            onError={onError}
                            locale="es-AR"
                        />
                    </div>
                </>}
        </div>
    );
}