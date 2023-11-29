import { useCart } from "../../hooks/useCart";
import Button from "../Button";
import orderService from "../../services/order";
import { useAuth } from "../../context/auth";
import product from "../../services/product";


export function TransferPay({sendMethod}) {

    const {accessToken} = useAuth()
    const {cart, total} = useCart()

    const cartString = cart.map(product => {
        return `${product.title} x ${product.quantity}`
    }).join(", ")

    const handleOrder = async (e) => {
        
        const orderNumber = await orderService.getMaxOrder()
        const orderDetails = {
            products: cart.map(product => {
                return {
                    id: product.id,
                    title: product.title,
                    quantity: product.quantity
                }
            }),
            total,
            type: "Transferencia",
            number: Number(orderNumber) + 1,
            send: sendMethod
        }
        orderService.createOrder(orderDetails, accessToken)
        .then((res) => {
            if(res.status === 201) {
                window.location.href = "/order"
            }
        })
    }

    return(
        <div className="w-full text-center flex justify-center items-center">
            <span className="max-w-lg flex flex-col text-mint-900 items-center justify-center space-y-2">
                <p className="text-4xl font-semibold pt-12">Transferencia bancaria</p>
                <p className="text-xl font-medium pb-4">Para realizar la compra con transferencia bancaria, sigue los siguientes pasos:</p>
                <p className="text-lg font-regular">1. Realiza una transferencia bancaria a la siguiente cuenta:</p>
                <span className="space-y-4 text-center bg-mint-25 rounded-xl px-4 py-6 [&>*]:border-b-2 [&>*]:border-mint-700 [&>*]:border-opacity-30 [&>*]:py-1">
                    <p className="text-lg font-regular"><strong>Banco Santander Río</strong></p>                    
                    <p className="text-lg font-regular"><strong>CBU:</strong> 0720111188000000285647</p>
                    <p className="text-lg font-regular"><strong>Alias:</strong> ISLA.MADERA</p>
                    <p className="text-lg font-regular"><strong>CUIT:</strong> 20-38995555-3</p>
                </span>
                <p className="text-lg font-regular">2. Envía el comprobante de pago a 
                    <span className="text-mint-900">
                        <a href={`mailto:islamaderas@gmail.com?subject=¡Nueva compra!&body=${cartString}`} onClick={handleOrder} className="hover:underline hover:text-mint-700"> <strong>este correo</strong> (hace click!)</a>
                    </span>
                </p>
                <p className="text-lg font-regular">3. Una vez que recibamos el comprobante, te enviaremos un correo confirmando la compra.</p>
                <Button onClick={() => window.location.href="/"} title="Volver al inicio" />
            </span>
        </div>
    )
}