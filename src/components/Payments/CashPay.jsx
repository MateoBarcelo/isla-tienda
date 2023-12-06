
import { useAuth } from "../../context/auth"
import { useCart } from "../../hooks/useCart"
import orderService from "../../services/order"
import Button from "../Button"

export function CashPay({sendMethod, price}) {
    const {accessToken} = useAuth()
    const {cart} = useCart()

    const cartString = "Hola, quiero hacer un pedido de los siguentes productos en efectivo, cómo podemos coordinar? Productos: " + cart.map(product => {
        return `${product.title} x ${product.quantity}`
    }).join(", ") 


    const cartToLink = cartString.replace(/ /g, "%20")

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
            total: price,
            type: "Efectivo",
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
                <p className="text-4xl font-semibold pt-12">Efectivo</p>
                <p className="text-xl font-medium pb-4">Para realizar la compra en efectivo, tendrás que coordinar con nosotros a través de WhatsApp.</p>
                    <Button onClick={handleOrder}>
                        <a target="_blank" href={`https://wa.me/5493424067248?text=${cartToLink}`}>
                            Pedir por WhatsApp
                        </a>
                    </Button>  
            </span>
        </div>
    )
}