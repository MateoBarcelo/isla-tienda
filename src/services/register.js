import axios from 'axios'
import { baseUrl } from './consts'

const url = `${baseUrl}/api/users/register`
const config = {
    headers: {
        "Access-Control-Allow-Origin": '*'
    }
}

const register = async (credentials) => {
    const response = await axios.post(url, credentials, config)
    return response.data
}

export default { register }