import { useState, useEffect } from "react"
import Button from "../Button.jsx"
import productService from "../../services/product"
import { useAuth } from "../../context/auth.jsx"
import Product from "./Product.jsx"
import ProductForm from "./ProductForm.jsx"
import { useParams } from "react-router-dom"
import { Toast } from "../Toast.jsx"
import { EditIcon } from "../Icons/Icons.jsx"

export function EditProduct() {

    const {id} = useParams()

    const [image, setImage] = useState(null)
    const [productThumb, setProductThumb] = useState(null)

    const [formData, setFormData] = useState({
        name: "Mueble",
        category: "",
        price: "",
        stock: "",
        thumbnail: "/logo.png",
        measures: "1mt x 1mt x 50cm",
    });

    const [added, setAdded] = useState(false)

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
            setProductThumb(product.thumbnail)
        }
        fetchProduct()
    }, [])

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

        const imageBlob = await fetch(productThumb).then((r) => r.blob())
        const imageForm = image ? image : new File([imageBlob], `thumbnail-${new Date().getTime()}.png`, {type: 'image/png'})
        
        const formImage = new FormData()
        formImage.append('file', imageForm)

        const {name, category, price, stock, thumbnail, measures} = formData

        try {
            let imgUrl = productThumb

            if(image) {
                console.log("changed")
                const {fileUrl} = await productService.uploadImage(formImage, accessToken)
                imgUrl = fileUrl
            }

            const product = {
                title: name,
                category,
                price,
                stock,
                thumbnail: imgUrl,
                measures
            }
            
            await productService.edit(id, product, accessToken)

            window.location.href = "/products"

            setTimeout(() => {
                setAdded(false)
            }, 3000)

        } catch (error) {
            console.log(error)
        }

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
            <Toast className={`${added ? 'zoomIn' : 'hidden'} `}>
                    <div className="flex flex-row space-x-2 items-center">
                        <EditIcon />
                        <p className="text-lg">Producto editado!</p>
                    </div>
            </Toast>
        </div>
    )
}