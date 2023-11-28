import { baseUrl } from "./consts";
import axios from 'axios'

const url = `${baseUrl}/api/order`;

const config = (token) => ({
    headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`,
    }
})

const createOrder = async (order, token) => {
    const response = await axios.post(url, order, config(token));
    return response.data;
}

const updateOrder = async (order, token) => {
    const response = await axios.put(url + `/${order.id}`, order, config(token));
    return response.data;
}

const getOrders = async (token) => {
    const response = await axios.get(url, config(token));
    return response.data;
}

const deleteOrder = async (order, token) => {
    const response = await axios.delete(url + `/${order.id}`, config(token));
    return response.data;
}

const getMaxOrder = async () => {
    const response = await axios.get(url + '/maxorder');
    return response.data;
}

export default {createOrder, getOrders, updateOrder, getMaxOrder, deleteOrder};




