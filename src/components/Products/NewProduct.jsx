import { useState} from "react"
import Button from "../Button.jsx"
import productService from "../../services/product"
import { useAuth } from "../../context/auth.jsx"
import Product from "./Product.jsx"
import ProductForm from "./ProductForm.jsx"
import { Toast } from "../Toast.jsx"

export function NewProduct() {

    const [image, setImage] = useState(null)
    const [formData, setFormData] = useState({
        name: "Mueble",
        category: "",
        price: "",
        stock: "",
        thumbnail: "./logo.png",
        measures: "1mt x 1mt x 50cm",
    });
    const [added, setAdded] = useState(false)

    const {accessToken, admin} = useAuth()

    if (!admin) {
        return (
            <div className="grid place-items-center text-mint-900 w-full space-y-4 h-auto p-12">
                <h1 className='text-xl'>No tienes permiso para ver esta página</h1>
                <Button onClick={() => window.location.href="/"} title="Volver al inicio" />
            </div>
        )
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const formImage = new FormData()
        formImage.append('file', image)

        const {name, category, price, stock, thumbnail, measures} = formData

        try {
            const {fileUrl} = await productService.uploadImage(formImage, accessToken)

            const product = {
                title: name,
                category,
                price,
                stock,
                thumbnail: fileUrl,
                measures
            }
            
            await productService.create(product, accessToken)
            setAdded(true)

        } catch (error) {
            console.log(error)
            setAdded(false)
        }

        setFormData({
            name: "Mueble",
            category: "",
            price: "",
            stock: "",
            thumbnail: "./logo.png",
            measures: "1mt x 1mt x 50cm",
        })
        setTimeout(() => {
            setAdded(false)
        }, 3000)
    }

    const handleInputChange = (fieldName, target) => {
        if(fieldName === "thumbnail") {
            const [file] = target.files
            if(file)  {
                setImage(file)
                return setFormData((prevFormData) => ({
                    ...prevFormData,
                    [fieldName]: URL.createObjectURL(file)
                }))
            } 
        }
        setFormData((prevFormData) => ({
            ...prevFormData,
            [fieldName]: target.value
        }))
    }

    return (
        <div className="flex flex-col md:flex-row justify-center items-center [&>*]:mx-20">
            <ProductForm handleSubmit={handleSubmit} onInputChange={handleInputChange} formData={formData} />
            <Product product={""} formData={formData}/>
            <Toast className={`${added ? 'zoomIn' : 'zoomOut'} `}>
                    <div className="flex flex-row space-x-2 items-center">
                        <svg width="28" height="21" viewBox="0 0 44 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.4 34.9C15.256 34.9 15.95 34.206 15.95 33.35C15.95 32.4939 15.256 31.8 14.4 31.8C13.5439 31.8 12.85 32.4939 12.85 33.35C12.85 34.206 13.5439 34.9 14.4 34.9Z" stroke="#1F443D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M26.8 34.9C27.656 34.9 28.35 34.206 28.35 33.35C28.35 32.4939 27.656 31.8 26.8 31.8C25.944 31.8 25.25 32.4939 25.25 33.35C25.25 34.206 25.944 34.9 26.8 34.9Z" stroke="#1F443D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2 7H7.425C7.425 7 8.06506 9.83407 8.47517 11.65C9.29464 15.2785 10.4201 20.2621 11.0805 23.1859C11.3997 24.5992 12.6547 25.6 14.1036 25.6H27.4133C28.8663 25.6 30.1243 24.5908 30.4394 23.1725L33 11.65" stroke="#1F443D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M33 11.65H8.97498" stroke="#1F443D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M38.5 2V9" stroke="#1F443D" stroke-width="3" stroke-linecap="round"/>
                            <path d="M42 5.5L35 5.5" stroke="#1F443D" stroke-width="3" stroke-linecap="round"/>
                        </svg>
                        <p className="text-lg">Producto añadido!</p>
                    </div>
            </Toast>
        </div>
    )
}