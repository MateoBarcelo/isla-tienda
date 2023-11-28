import { useAuth } from '../context/auth'
import orderService from '../services/order'
import { useEffect, useState } from 'react'

export function useOrders() {

    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const {accessToken} = useAuth()

    async function fetchData() {
        setLoading(true)
        try {
            const ors = await orderService.getOrders(accessToken)
            setOrders(ors)
            setLoading(false)
        } catch (error) {
            setError(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return { orders, loading, error }
}

export default useOrders