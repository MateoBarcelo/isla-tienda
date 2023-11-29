import { baseUrl } from "./consts";
import axios from 'axios'

const url = `${baseUrl}/api/users`;

const config = (token) => { 
    return ({
        headers: {
            "Authorization": `Bearer ${token}`,
        }
    })
}

const getUserByEmail = async (id, token) => {
    const response = await axios.get(url + "/email/" + id, config(token));
    return response.data;
}

const updateUser = async (id, user, token) => {
    const response = await axios.put(url + "/" + id, user, config(token));
    return response.data;
}

const isAdmin = async (token) => {
    const response = await axios.get(url + "/isAdmin", config(token));
    return response;
}

export default {getUserByEmail, updateUser, isAdmin}