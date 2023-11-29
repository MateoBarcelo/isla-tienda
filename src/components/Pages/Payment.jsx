import { useCart } from "../../hooks/useCart";
import { CardPay } from "../Payments/CardPay";
import { TransferPay } from "../Payments/TransferPay";

export function Payment() {

    const {total} = useCart()

    const params = new URLSearchParams(window.location.search);

    const price = total + Number(params.get("send") === "flete" ? import.meta.env.VITE_SENT_PRICE : 0)

    return (
        params.get("type") === "card" 
        ? <CardPay price={price} sendMethod={params.get("send") || "local"} /> 
        : <TransferPay price={price} sendMethod={params.get("send") || "local"} />
    )
 
}