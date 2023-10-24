export function Item({ img, title, description, color}) {
    return (
        <div className="flex flex-col justify-center items-center">
            <img src={img} alt={`Vector de ${title}`} className="w-[52px] m-4" />
            <span className={`text-center ${color}`}>
                <h1 className="font-bold text-xl">{title}</h1>
                <p className="font-regular text-lg -mt-1">{description}</p>
            </span>
        </div>
    )
}