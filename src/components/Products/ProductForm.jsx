import { CategorySelector } from "../CategorySelector"
import Button from "../Button"

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
                value={formData.price}
                onChange={(event) => onInputChange("price", event.target)}
                className="p-2 -mt-2 rounded-lg bg-mint-100 border-mint-700 border-opacity-70 font-normal text-sm border focus:ring-0 focus:outline focus:outline-2 focus:outline-mint-500 outline-mint-500 outline-0 transition-all [transition-duration:100ms]"
            />
            <label htmlFor="measures" className="text-blue-gray-500">
                Medidas
            </label>
            <input
                id="measures"
                placeholder="1mt x 1mt x 50cm"
                value={formData.measures}
                onChange={(event) => onInputChange("measures", event.target)}
                className="p-2 -mt-2 rounded-lg bg-mint-100 border-mint-700 border-opacity-70 font-normal text-sm border focus:ring-0 focus:outline focus:outline-2 focus:outline-mint-500 outline-mint-500 outline-0 transition-all [transition-duration:100ms]"
            />
            <label htmlFor="stock" className="text-blue-gray-500">
                Stock
            </label>
            <input
                id="stock"
                placeholder="4"
                value={formData.stock}
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

export default ProductForm