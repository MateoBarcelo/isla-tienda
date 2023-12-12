import { Item } from './Item'

export function ItemSection() {
    return (
    <section data-aos="fade-up" className='flex flex-col space-y-8 md:space-y-0 md:flex-row justify-between items-center py-4 md:px-16 lg:px-32 px-12'>
        <Item img={"camion.svg"} title={"ENVÍOS SÓLO"} description={"a Santo Tomé (y Santa Fe)"} color={"text-mint-900"} />
        <div className='hidden md:block border-l-2 border-mint-900 h-[100px] bg-mint-900 rounded-md'></div>
        <Item img={"tarjeta.svg"} title={"PAGOS"} description={"Efectivo, Transferencia o Tarjeta"} color={"text-mint-900"} />
        <div className='hidden md:block border-l-2 border-mint-900 h-[100px] bg-mint-900 rounded-md'></div>
        <Item img={"escudo.svg"} title={"COMPRA SEGURA"} description={"Protegemos tus datos"} color={"text-mint-900"} />
    </section>)
}