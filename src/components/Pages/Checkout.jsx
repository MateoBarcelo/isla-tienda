import { useEffect, useState } from "react";
import { useCart } from "../../hooks/useCart";
import Button from "../Button";
import bcrypt from "bcryptjs-react"

const PAY_METHODS = ["card", "cash"]
const SEND_METHODS = ["local", "flete"]
let envio = 2000
export function Checkout(props) {

    const {cart, total} = useCart()
    const [payMethod, setPayMethod] = useState("card")
    const [sendMethod, setSendMethod] = useState("flete")
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [payDisabled, setPayDisabled] = useState(true)

    const handlePayRedirection = () => {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(import.meta.env.VITE_REFERRAL_CODE, salt)
        sessionStorage.setItem("referralCode", hash)

        if(payMethod === "card") {
            window.location.href = `/order?type=card`
        } else {
            window.location.href = `/order?type=transfer`
        }
    }

    const handlePayMethod = (e) => {
        if(e.target.checked) {
            if(e.target.value === "card") {
                setPayMethod(PAY_METHODS[0])
            } else {
                setPayMethod(PAY_METHODS[1])
            }
        }
        setPayDisabled(false)
    }

    const handleSendMethod = (e) => {
        if(e.target.name === "local") {
            setSendMethod(SEND_METHODS[0])
            envio = 0
        } else {
            setSendMethod(SEND_METHODS[1])
            envio = 2000
        }
        setButtonDisabled(!buttonDisabled)
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <p className="text-3xl pt-12 text-mint-900 font-bold">Completá tu compra</p>
            <hr class="w-48 h-[2px] mx-auto my-4 bg-mint-900 border-0 rounded md:my-10"></hr>
            <div className="grid [place-items:start_center] [grid-template-columns:1fr] lg:[grid-template-columns:1.3fr_1.7fr_1.3fr] px-16 md:px-28 py-4 gap-4 w-full h-full">
                <div className="w-[100%]">
                    <p className="text-2xl text-mint-900 font-semibold pb-4 text-center">1. Revisá tu carrito</p>
                    <div className="flex flex-col justify-center items-start space-y-2 rounded-xl">
                        {cart.map(product => (       
                            <li key={product.id} className="flex items-center w-full text-left shadow-md rounded-lg bg-mint-25 text-mint-900 p-4">
                                <img src={product.thumbnail} alt={product.title} className="rounded-md w-1/2 h-1/2 aspect-square block object-cover bg-white" />                            
                                <div className="flex flex-col px-2 space-y-2">
                                    <h3 className="text-xl font-medium">{product.title}</h3>
                                    
                                    <p className="text-2xl font-semibold opacity-90">${product.price}</p>
                                    <p className="text-lg">{product.measures}</p>
                                    
                                </div>
                            </li>
                        ))}
                    </div>
                </div>
                <div className="w-full">
                <p className="text-2xl text-mint-900 font-semibold pb-4 text-center">2. Rellená los campos</p>
                <div className="bg-mint-25 rounded-xl shadow-md flex flex-col py-6 px-10 justify-center items-start space-y-4">
                    <div className="w-full space-y-2">
                        <label className="text-mint-900 text-lg font-semibold">Direccion</label>
                        <input type="text" className="w-full border border-mint-900 border-opacity-60 bg-transparent rounded-md p-2" />
                    </div>
                    <div className="w-full space-y-2">
                        <label className="text-mint-900 text-lg font-semibold">Teléfono</label>
                        <input type="text" className="w-full border border-mint-900 border-opacity-60 bg-transparent rounded-md p-2" />
                    </div>
                    <div className="w-full space-y-2">
                        <label className="text-mint-900 text-lg font-semibold">Notas</label>
                        <input type="text" className="w-full border border-mint-900 border-opacity-60 bg-transparent rounded-md p-2" />
                    </div>
                    <div className="w-full space-y-2 py-2">
                        <label className="text-mint-900 text-xl font-semibold">Envío</label>
                        <div className="space-x-8 flex justify-center items-center">
                            <Button onClick={handleSendMethod} name={"local"} disabled={buttonDisabled} title={"Retiro en local"} />
                            <Button onClick={handleSendMethod} name={"flete"} disabled={!buttonDisabled} title={"Envío por flete"} />
                        </div>
                    </div>
                </div>
                </div>
                <div className="w-full">
                    <p className="text-2xl text-mint-900 font-semibold pb-4 text-center">3. Método de pago</p>
                    <div className="space-y-2 bg-mint-25 shadow-md rounded-xl p-10">
                        <div className="py-4">
                            <div className="relative border mb-4 border-mint-900 border-opacity-60 bg-transparent rounded-md p-2">
                                <label className="text-mint-900 text-lg font-semibold">Tarjeta</label>
                                <input 
                                    type="radio" 
                                    name="payMethod" 
                                    value="card" 
                                    onChange={handlePayMethod}
                                    className="absolute appearance-none top-4 right-6 cursor-pointer outline-none rounded-full w-4 h-4 bg-transparent border border-mint-900 checked:bg-mint-700 transition-colors" 
                                />            
                            </div>
                            <div className="relative border border-mint-900 border-opacity-60 bg-transparent rounded-md p-2">
                                <label className="text-mint-900 text-lg font-semibold">Efectivo</label>
                                <input 
                                    type="radio" 
                                    name="payMethod" 
                                    value="cash"
                                    onChange={handlePayMethod}
                                    className="absolute top-4 appearance-none right-6 cursor-pointer outline-none rounded-full w-4 h-4 bg-transparent border border-mint-900 checked:bg-mint-700 transition-colors" 
                                />
                            </div>
                        </div>
                        <p className="text-right text-lg text-mint-900 text-opacity-80 pt-2">Productos: ${total}</p>
                        <p className="text-right text-lg text-mint-900 text-opacity-80">Envío: ${envio}</p>
                        <hr class="w-full h-[1px] my-4 bg-mint-900 border-0 rounded md:my-10"></hr>
                        <p className="text-right text-xl text-mint-900 pt-4 pb-4 font-semibold">TOTAL: ${envio + total}</p>
                        <div className="grid">
                        <Button title={"Ir a pagar"} disabled={cart.length == 0 || payDisabled} onClick={handlePayRedirection}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

