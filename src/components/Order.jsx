export function Order({order, deleteOrder, updateOrder}) {
        const {number, total, products, user, state, type} = order

        const handleDelete = () => {
            deleteOrder(order)
        }

        const handleUpdate = () => {
            updateOrder(order)
        }

        let translatedState = ''
        let classState = ''
        switch(state) {
            case 'approved': translatedState = 'Aprobado'; classState = 'text-mint-900'
            break
            case 'in_process': translatedState = 'Pendiente'; classState = 'text-yellow-600'
            break
            case 'rejected': translatedState = 'Rechazado'; classState = 'text-red-500'
            break
            default: translatedState = 'Pendiente'
        }

        return (
            <tr className="border-b transition-colors font-semibold hover:bg-mint-50 data-[state=selected]:bg-muted">
                <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                    #{number}
                </td>
                <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                    ${total}
                </td>
                <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                    {products.map(product => product.title).join(', ')}
                </td>
                <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                    {user}
                </td>
                <td className={`p-4 align-middle [&:has([role=checkbox])]:pr-0 ${classState}`}>
                    {translatedState}
                </td>
                <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                    {type}
                </td>
                <td className="py-4 align-middle [&:has([role=checkbox])]:pr-0">
                    <button onClick={handleUpdate} className="inline-flex bg-mint-900 text-mint-25 items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-auto p-4"
                    disabled={state == "approved" ? true : false}>
                        Aprobar
                    </button>
                </td>
                <td className="p-4 relative align-middle [&:has([role=checkbox])]:pr-0">
                <button type="button" onClick={handleDelete} className="flex items-center w-full justify-center rounded-md text-sm font-semibold">
                    <svg width="27" height="27" viewBox="0 0 167 167" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M62.3008 62.3007H72.6842V124.601H62.3008V62.3007Z" fill="#1F443D"/>
                        <path d="M93.4509 62.3007H103.834V124.601H93.4509V62.3007Z" fill="#1F443D"/>
                        <path d="M20.7668 31.1503V41.5338H31.1503V145.368C31.1503 148.122 32.2443 150.763 34.1915 152.71C36.1388 154.658 38.7799 155.752 41.5337 155.752H124.601C127.355 155.752 129.996 154.658 131.944 152.71C133.891 150.763 134.985 148.122 134.985 145.368V41.5338H145.368V31.1503H20.7668ZM41.5337 145.368V41.5338H124.601V145.368H41.5337Z" fill="#1F443D"/>
                        <path d="M62.3008 10.3834H103.835V20.7669H62.3008V10.3834Z" fill="#1F443D"/>
                    </svg>
                </button>
                    
                </td>
            </tr>
        )
}

export default Order