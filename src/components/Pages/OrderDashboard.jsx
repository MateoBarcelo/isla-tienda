import { useEffect } from 'react'
import Button from '../Button'
import { useState } from 'react'
import useOrders from '../../hooks/useOrders'
import orderService from '../../services/order'
import { useAuth } from '../../context/auth'
import Order from '../Order'
import { useIsAdmin } from '../../hooks/useIsAdmin'

export function OrderDashboard() {

    const [category, setCategory] = useState('all');
    const [orderList, setOrders] = useState([]);

    const { accessToken } = useAuth();
    const { orders } = useOrders();

    const filterOrders = (orders) => {
        return orders.filter((order) => {
            return order.state === category || category === 'all';
        });
    };

    useEffect(() => {
        setOrders(filterOrders(orders));
    }, [category, orders]);

    const {admin} = useIsAdmin()

    if (!admin) {
        return (
            <div className="grid place-items-center text-mint-900 w-full space-y-4 h-auto p-12">
                <h1 className='text-xl'>No tienes permiso para ver esta página</h1>
                <Button onClick={() => window.location.href="/"} title="Volver al inicio" />
            </div>
        )
    }
    const handleDeleted = async (order) => {
        let confirm = false;
        if(order.state === 'approved') {
            confirm = true
        } else confirm = window.confirm('¿Estás seguro que deseas eliminar este producto?')
        
        if(confirm) {
            await orderService.deleteOrder(order, accessToken)
            setOrders(orderList.filter(o => order.id != o.id))
        }
    }

    const handleUpdateOrder = async (order) => {

   
        const confirm = window.confirm('¿Estás seguro que deseas aprobar este pedido?')
        const approvedOrder = {
            ...order,
            state: 'approved'
        }
     
        if(confirm) {
            await orderService.updateOrder(approvedOrder, accessToken)
            
            setOrders(orderList.map(o => o.id === order.id ? approvedOrder : o))
        }
    }

    const handleChangeCategory = (e) => {
        setCategory(e.target.id)
    }

    return (
        <div className="flex flex-col w-full h-auto md:px-24">
            <div className="flex flex-col h-full p-6">
                <div
                    dir="ltr"
                    data-orientation="horizontal"
                    className="flex flex-col gap-4"
                >
                    <div
                        role="tablist"
                        aria-orientation="horizontal"
                        className="inline-flex h-10 bg-mint-25 text-mint-900 bg-opacity-60 items-center justify-center rounded-lg p-1"
                        tabIndex={-1}
                        data-orientation="horizontal"
                        style={{ outline: "none" }}
                    >
                        <button
                            type="button"
                            role="tab"
                            aria-selected="false"
                            aria-controls="radix-:r5:-content-all"
                            data-state={category === 'all' ? 'active' : 'inactive'}
                            id="all"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-mint-25 data-[state=active]:font-semibold data-[state=active]:shadow"
                            tabIndex={-1}
                            data-orientation="horizontal"
                            data-radix-collection-item=""
                            onClick={handleChangeCategory}
                        >
                            Todas
                        </button>
                        <button
                            type="button"
                            role="tab"
                            aria-selected="true"
                            aria-controls="radix-:r5:-content-approved"
                            data-state={category === 'approved' ? 'active' : 'inactive'}
                            id="approved"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-mint-25 data-[state=active]:font-semibold data-[state=active]:shadow"
                            tabIndex={-1}
                            data-orientation="horizontal"
                            data-radix-collection-item=""
                            onClick={handleChangeCategory}
                        >
                            Aprobadas
                        </button>
                        <button
                            type="button"
                            role="tab"
                            aria-selected="false"
                            aria-controls="radix-:r5:-content-pending"
                            data-state={category === 'pending' ? 'active' : 'inactive'}
                            id="pending"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-mint-25 data-[state=active]:font-semibold data-[state=active]:shadow"
                            tabIndex={-1}
                            data-orientation="horizontal"
                            data-radix-collection-item=""
                            onClick={handleChangeCategory}
                        >
                            Pendientes
                        </button>
                        <button
                            type="button"
                            role="tab"
                            aria-selected="false"
                            aria-controls="radix-:r5:-content-cancelled"
                            data-state={category === 'cancelled' ? 'active' : 'inactive'}
                            id="cancelled"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-mint-25 data-[state=active]:font-semibold data-[state=active]:shadow"
                            tabIndex={-1}
                            data-orientation="horizontal"
                            data-radix-collection-item=""
                            onClick={handleChangeCategory}
                        >
                            Canceladas
                        </button>
                    </div>
                    <div
                        data-state="active"
                        data-orientation="horizontal"
                        role="tabpanel"
                        aria-labelledby="radix-:r5:-trigger-all"
                        id="radix-:r5:-content-all"
                        tabIndex={0}
                        className="mt-2 text-mint-900 rounded-lg ring-offset-background bg-mint-25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        style={{ animationDuration: "0s" }}
                    >
                        <div className="border shadow-sm rounded-lg p-2">
                            <div className="relative w-full overflow-auto">
                                <table className="w-full caption-bottom text-sm">
                                    <thead className="[&_tr]:border-b">
                                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                                                ID
                                            </th>
                                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                                                Total
                                            </th>
                                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                                                Productos
                                            </th>
                                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                                                Usuario
                                            </th>
                                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                                                Estado
                                            </th>
                                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
                                                Tipo
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="[&_tr:last-child]:border-0">
                                        {orderList.map((order) => (
                                            <Order key={order.id} order={order} deleteOrder={handleDeleted} updateOrder={handleUpdateOrder} />))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div
                        data-state="inactive"
                        data-orientation="horizontal"
                        role="tabpanel"
                        aria-labelledby="radix-:r5:-trigger-approved"
                        hidden=""
                        id="radix-:r5:-content-approved"
                        tabIndex={0}
                        className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                    <div
                        data-state="inactive"
                        data-orientation="horizontal"
                        role="tabpanel"
                        aria-labelledby="radix-:r5:-trigger-pending"
                        hidden=""
                        id="radix-:r5:-content-pending"
                        tabIndex={0}
                        className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                    <div
                        data-state="inactive"
                        data-orientation="horizontal"
                        role="tabpanel"
                        aria-labelledby="radix-:r5:-trigger-cancelled"
                        hidden=""
                        id="radix-:r5:-content-cancelled"
                        tabIndex={0}
                        className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                </div>
            </div>
        </div>



    )
}