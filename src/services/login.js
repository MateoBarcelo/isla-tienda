import axios from 'axios'
import { baseUrl } from './consts'

const url = `${baseUrl}/api/login`
const config = {
    headers: {
        "Access-Control-Allow-Origin": '*'
    }
}

const login = async (credentials) => {
  const response = await axios.post(url, credentials, config)
  return response.data
}

export default { login }