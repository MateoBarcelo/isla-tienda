import axios from 'axios'
import { baseUrl } from './consts'

const config = (token) => {
    return ({
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    })
   
}

const create = async (product, token) => {
  try {
    const response = await axios.post(`${baseUrl}/api/products`, product, config(token))
    return response.data
  } catch (error) {
    throw error
  }
}

const uploadImage = async (image, token) => {
  try {
    const response = await axios.post(`${baseUrl}/api/uploads`, image, config(token))
    return response.data
  } catch (error) {
    throw error
  }
}

const getProducts = async () => {
    try {
        const response = await axios.get(`${baseUrl}/api/products`)
        return response.data
    } catch (error) {
        throw error
    }
}

export default { create, uploadImage, getProducts}