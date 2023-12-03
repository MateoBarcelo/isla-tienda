import { useCart } from "../../hooks/useCart";
import { CardPay } from "../Payments/CardPay";
import { TransferPay } from "../Payments/TransferPay";
import { CashPay } from "../Payments/CashPay";

export function Payment() {

    const {total} = useCart()

    const params = new URLSearchParams(window.location.search);

    const price = total + Number(params.get("send") === "flete" ? Number(import.meta.env.VITE_SENT_PRICE) : 0)

    const renderPayment = () => {
        if(params.get("type") === "card") {
            return <CardPay price={price} sendMethod={params.get("send") || "local"} />
        } else if(params.get("type") === "transfer") {
            return <TransferPay price={price} sendMethod={params.get("send") || "local"} />
        } else {
            return <CashPay price={Number(price)} sendMethod={params.get("send") || "local"} />
        }
    }

    return (
        <>
            {renderPayment()}
        </>
    );
 
}