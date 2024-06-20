import { useEffect, useState } from "react";
import { useCart } from "../../hooks/useCart";
import { useAuth } from "../../context/auth";
import userService from "../../services/user";
import Button from "../Button";
import bcrypt from "bcryptjs-react"

const PAY_METHODS = ["card", "cash", "transfer"]
const SEND_METHODS = ["local", "flete"]
let envio = Number(import.meta.env.VITE_SENT_PRICE)
export function Checkout(props) {

    const {cart, total} = useCart()
    const {getID, user, accessToken} = useAuth()

    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")

    const [payMethod, setPayMethod] = useState('')
    const [sendMethod, setSendMethod] = useState("flete")
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [payDisabled, setPayDisabled] = useState(true)
    const [firstFetch, setFirstFetch] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        if(!firstFetch) return setError('')

        if(address && phone){
            setError('')
            if(payMethod) setPayDisabled(false)
        } 
        else {
            setPayDisabled(true)
            setError('Completa los campos')
        }

    },[address, phone, payMethod])

    useEffect(() => {
        setFirstFetch(true)
    },[])

    const handlePayRedirection = async () => {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(import.meta.env.VITE_REFERRAL_CODE, salt)
        sessionStorage.setItem("referralCode", hash)

        const userID = await getID(user)

        const updatedUser = {
            ...user,
            address,
            phone
        }

        await userService.updateUser(userID, updatedUser, accessToken)

        if(error) {
            return
        }
        
        window.location.href = `/order?type=${payMethod}&send=${sendMethod}`

    }

    const handlePayMethod = (e) => {
        if(e.target.checked) {
            if(PAY_METHODS.includes(e.target.value)) {
                setPayMethod(e.target.value)
            }
        }

        setPayDisabled(false)
    }

    const handleSendMethod = (e) => {
        e.preventDefault()
        if(e.target.name === "local") {
            setSendMethod(SEND_METHODS[0])
            envio = 0
        } else {
            setSendMethod(SEND_METHODS[1])
            envio = Number(import.meta.env.VITE_SENT_PRICE)
        }
        setButtonDisabled(!buttonDisabled)
    }

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <p className="text-3xl pt-12 text-mint-900 font-bold">Completá tu compra</p>
            <hr class="w-48 h-[2px] mx-auto my-4 bg-mint-900 border-0 rounded md:my-10"></hr>
            <div className="grid content-center md:[place-items:start_center] grid-cols-1 lg:[grid-template-columns:1.3fr_1.7fr_1.3fr] px-10 md:px-28 py-4 gap-4 w-full h-full">
                <div className="w-full">
                    <p className="text-2xl text-mint-900 font-semibold pb-4 text-center">1. Revisá tu carrito</p>
                    <div className="flex flex-col justify-center items-center space-y-2 rounded-xl">
                        {cart.length > 0 ? cart.map(product => (       
                            <li key={product.id} className="flex items-center w-full text-left shadow-md rounded-lg bg-mint-25 text-mint-900 p-4">
                                <img src={product.thumbnail} alt={product.title} className="rounded-md w-1/2 h-1/2 aspect-square block object-cover bg-white" />                            
                                <div className="flex flex-col px-2 py-2">
                                    <h3 className="text-lg md:text-xl font-medium">{product.title}</h3>
                                    
                                    <p className="text-xl md:text-2xl font-semibold opacity-90">${product.price}</p>
                                    <p className="text-sm md:text-lg">{product.measures}</p>
                                    <p className="text-sm md:text-lg">Cant.: x{product.quantity}</p>
                                    
                                </div>
                            </li>
                        )) : <p className="text-lg text-mint-900 pb-6 text-center">No hay productos en el carrito!</p>}
                    </div>
                </div>
                <div className="w-full">
                <p className="text-2xl text-mint-900 font-semibold pb-4 text-center">2. Rellená los campos</p>
                <form className="bg-mint-25 rounded-xl shadow-md flex flex-col py-6 px-10 justify-center items-start space-y-4">
                    <div className="w-full space-y-2">
                        <label className="text-mint-900 text-lg font-semibold">Direccion*</label>
                        <input type="text" maxLength={30} onChange={(e) => setAddress(e.target.value)} value={address} className="w-full border border-mint-900 border-opacity-60 bg-transparent rounded-md p-2" />
                    </div>
                    <div className="w-full space-y-2">
                        <label className="text-mint-900 text-lg font-semibold">Teléfono*</label>
                        <input type="text" onChange={(e) => setPhone(e.target.value)} value={phone} className="w-full border border-mint-900 border-opacity-60 bg-transparent rounded-md p-2" />
                    </div>
                    <div className="w-full space-y-2">
                        <label className="text-mint-900 text-lg font-semibold">Notas</label>
                        <input type="text" className="w-full border border-mint-900 border-opacity-60 bg-transparent rounded-md p-2" />
                    </div>
                    {error && <div className="w-full space-y-2">
                        <label className="text-red-500 text-lg font-semibold">{error}</label>
                    </div>}
                    <div className="w-full space-y-2 py-2">
                        <label className="text-mint-900 text-xl font-semibold">Envío</label>
                        <div className="space-x-8 flex justify-center items-center">
                                <Button onClick={handleSendMethod} name={"local"} disabled={buttonDisabled} title={"Retiro local"} />     
                                <Button onClick={handleSendMethod} name={"flete"} disabled={!buttonDisabled} title={"Envío flete"} />
                        </div>
                    </div>
                    <div className="flex justify-center w-full">
                        {sendMethod === "local" && <p className="text-mint-900">En: Moreno 3058</p>}
                        {sendMethod === "flete" && <p className="text-mint-900">Envío a: {address || "Tu dirección"}</p>}
                    </div>
                </form>
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
                                <label className="text-mint-900 text-lg font-semibold">Transferencia</label>
                                <input 
                                    type="radio" 
                                    name="payMethod" 
                                    value="transfer"
                                    onChange={handlePayMethod}
                                    className="absolute top-4 appearance-none right-6 cursor-pointer outline-none rounded-full w-4 h-4 bg-transparent border border-mint-900 checked:bg-mint-700 transition-colors" 
                                />
                            </div>
                            <div className="relative border mt-2 border-mint-900 border-opacity-60 bg-transparent rounded-md p-2">
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
                        <Button title={"Ir a pagar"} className={"-mb-3 w-full"} disabled={cart.length == 0 || payDisabled} onClick={handlePayRedirection}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

