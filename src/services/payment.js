import { baseUrl } from "./consts";
import axios from "axios";

const url = `${baseUrl}/api/checkout/cardpayment`;

const config = (token) => {
    return ({
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`,
        }
    })
}

const createPayment = async (paymentDetails, token) => {
    const response = await axios.post(url, paymentDetails, config(token));
    return response.data;
}

export default createPayment;