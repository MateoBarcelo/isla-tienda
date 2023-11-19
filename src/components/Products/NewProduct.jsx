import { useState, useMemo } from "react"
import { Link } from "react-router-dom"
import Button from "../Button.jsx"
import { CategorySelector } from "../CategorySelector.jsx"
import productService from "../../services/product"
import { useAuth } from "../../context/auth.jsx"
const ProductForm = ({handleSubmit, onInputChange, formData}) => {
    return(
    <form onSubmit={handleSubmit} className="text-mint-900 mt-14 mb-6 w-80 max-w-screen-lg sm:w-96 h-screen">
        <h4 className="text-3xl font-bold mb-8">Nuevo producto</h4>
        <div className="mb-1 flex flex-col gap-4 font-semibold">
            <label htmlFor="name" className="text-blue-gray-500">
                Título
            </label>
            <input
                type="text"
                id="name"
                value={formData.name}
                placeholder="Estantería de madera"
                onChange={(event) => onInputChange("name", event.target)}
                className="p-2 -mt-2 rounded-lg bg-mint-100 border-mint-700 border-opacity-70 font-normal text-sm border focus:ring-0 focus:outline focus:outline-2 focus:outline-mint-500 outline-mint-500 outline-0 transition-all [transition-duration:100ms]"
            />
            <label htmlFor="category" className="text-blue-gray-500">
                Categoría
            </label>
            <CategorySelector 
            className={"bg-mint-100 appearance-none [-moz-appearance:none] [-webkit-appearance:none] border border-opacity-70 font-normal text-sm border-mint-700 rounded-lg w-1/3 p-2"} 
            onChange={(event) => onInputChange("category", event.target)} />
            <label htmlFor="price" className="text-blue-gray-500">
                Precio
            </label>
            <input
                id="price"
                placeholder="$5000"
                onChange={(event) => onInputChange("price", event.target)}
                className="p-2 -mt-2 rounded-lg bg-mint-100 border-mint-700 border-opacity-70 font-normal text-sm border focus:ring-0 focus:outline focus:outline-2 focus:outline-mint-500 outline-mint-500 outline-0 transition-all [transition-duration:100ms]"
            />
            <label htmlFor="measures" className="text-blue-gray-500">
                Medidas
            </label>
            <input
                id="measures"
                placeholder="1mt x 1mt x 50cm"
                onChange={(event) => onInputChange("measures", event.target)}
                className="p-2 -mt-2 rounded-lg bg-mint-100 border-mint-700 border-opacity-70 font-normal text-sm border focus:ring-0 focus:outline focus:outline-2 focus:outline-mint-500 outline-mint-500 outline-0 transition-all [transition-duration:100ms]"
            />
            <label htmlFor="stock" className="text-blue-gray-500">
                Stock
            </label>
            <input
                id="stock"
                placeholder="4"
                onChange={(event) => onInputChange("stock", event.target)}
                className="p-2 -mt-2 rounded-lg bg-mint-100 border-mint-700 border-opacity-70 font-normal text-sm border focus:ring-0 focus:outline focus:outline-2 focus:outline-mint-500 outline-mint-500 outline-0 transition-all [transition-duration:100ms]"
            />
            <label htmlFor="thumbnail" className="text-blue-gray-500">
                Imagen
            </label>
            <input type="file" onChange={(e) => onInputChange("thumbnail", e.target)} className="file-input file-input-bordered w-full max-w-xs" />
            <div className="text-center py-4">
                <Button type={"submit"} title="Agregar" />
            </div>
        </div>
    </form>
    )
}

const Product = ({formData}) => {
    const {name, category, price, stock, thumbnail, measures} = formData
    return (
        <div className="flex flex-col">
            <li key={name} className="flex flex-col w-[250px] h-[370px] text-left shadow-xl rounded-lg bg-[#F5F7F4] text-mint-900 p-5">
                <div className="relative group">
                    <div className="opacity-0 w-full h-[95%] transition-opacity absolute group-hover:opacity-100 bg-mint-900 bg-opacity-60 rounded-md"></div>
                    <img src={thumbnail} alt={name} className="rounded-md w-full aspect-square block object-cover bg-white mb-3" />

                    </div>
                <div>
                    <h3 className="text-xl font-medium">{name}</h3>
                </div>
                <span className="text-2xl font-semibold opacity-90">
                    <p>${price}</p>
                </span>
                <span>
                    <p>{measures}</p>
                </span>
            </li>

        </div>
    )
}

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

    const { accessToken } = useAuth()

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