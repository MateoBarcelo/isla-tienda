import { AddToCartIcon } from "./Icons";

export function Products({ products }) {

    return (
        <main className="w-full">
            <ul className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-3">
                {products.slice(0,10).map((product) => (
                    <li key={product.id} className="flex flex-col gap-4 text-center shadow-xl bg-[#111] text-[#fff] p-4">
                        <img src={product.thumbnail} alt={product.title} className="rounded-md w-full aspect-square block object-cover bg-white" />
                        <div>
                            <h3 className="m-0">{product.title}</h3>
                        </div>
                        <span className="text-lg opacity-90">
                            <p>${product.price}</p>
                            <button>
                                <AddToCartIcon></AddToCartIcon>
                            </button>
                        </span>
                    </li>))}
            </ul>
        </main>
    )
}