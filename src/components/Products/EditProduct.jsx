import { useState, useEffect } from "react"
import Button from "../Button.jsx"
import productService from "../../services/product"
import { useAuth } from "../../context/auth.jsx"
import { useIsAdmin } from "../../hooks/useIsAdmin.jsx"
import Product from "./Product.jsx"
import ProductForm from "./ProductForm.jsx"
import { useParams } from "react-router-dom"

export function EditProduct() {

    const {id} = useParams()

    const [image, setImage] = useState(null)

    const [formData, setFormData] = useState({
        name: "Mueble",
        category: "",
        price: "",
        stock: "",
        thumbnail: "/logo.png",
        measures: "1mt x 1mt x 50cm",
    });

    useEffect(() => {
        const fetchProduct = async () => {
            const product = await productService.getProductByID(id)
            setFormData({
                name: product.title,
                category: product.category,
                price: product.price,
                stock: product.stock,
                thumbnail: product.thumbnail,
                measures: product.measures,
            })
        }
        fetchProduct()
    }, [])

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
            
            await productService.edit(id, product, accessToken)

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