import { CardPayment, initMercadoPago } from "@mercadopago/sdk-react";
import createPayment from "../../services/payment";
import bcrypt from "bcryptjs-react"
import orderService from "../../services/order";

export function CardPay({price, sendMethod }) {
    const refCode = sessionStorage.getItem("referralCode")
    const decryptedRefCode = bcrypt.compareSync(import.meta.env.VITE_REFERRAL_CODE, String(refCode))
    if(!decryptedRefCode) window.location.href = "/"
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
            window.location.href = "/success"
        }
    };
    
    const onReady = () => {
        // callback llamado cuando el formulario de pago está listo para ser mostrado
    };

    const onError = () => {
        // callback llamado cuando ocurre un error en el formulario de pago
    };

    return (
        <div className="flex w-full flex-col-reverse justify-center items-center px-16 py-8 md:px-28 h-screen">
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
        </div>
    );
}