import { useState} from "react"
import Button from "../Button.jsx"
import productService from "../../services/product"
import { useAuth } from "../../context/auth.jsx"
import { useIsAdmin } from "../../hooks/useIsAdmin.jsx"
import Product from "./Product.jsx"
import ProductForm from "./ProductForm.jsx"

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

    const {accessToken} = useAuth()

    const {admin} = useIsAdmin()

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
            console.log("Producto creado")

        } catch (error) {
            console.log(error)
        }

        setFormData({})
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
        </div>
    )
}