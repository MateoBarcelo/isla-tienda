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

export default createOrder;




