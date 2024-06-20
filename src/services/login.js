import axios from 'axios'
import { baseUrl } from './consts'

const url = `${baseUrl}/api/login`

const login = async (credentials) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": '*'
    },
    body: JSON.stringify(credentials)
  })
  const respBody = await response.json()
  return respBody
}

export default { login }