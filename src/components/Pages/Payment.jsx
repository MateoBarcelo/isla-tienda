import { CardPay } from "../Payments/CardPay";
import { TransferPay } from "../Payments/TransferPay";

export function Payment({ price = 50 }) {

    const params = new URLSearchParams(window.location.search);


    return (
        
        params.get("type") === "card" 
        ? <CardPay price={price} /> 
        : <TransferPay />
    )
 
}