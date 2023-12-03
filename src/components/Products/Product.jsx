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

export default Product