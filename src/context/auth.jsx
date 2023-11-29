import { createContext, useContext, useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'
import { useCartReducer } from '../hooks/useCartReducer'
import userService from '../services/user'

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [accessToken, setAccessToken] = useState(sessionStorage.getItem("accessToken") || '')
    const [user, setUser] = useState(sessionStorage.getItem("user") || '')
    const {clearCart} = useCartReducer()

    const clearToken = () => {
        localStorage.removeItem("accessToken")
    }

    useEffect(() => {
        if(accessToken && validToken()) {
            sessionStorage.setItem("accessToken", accessToken)
            sessionStorage.setItem("user", user)
        } else {
            sessionStorage.removeItem("accessToken")
            sessionStorage.removeItem("user")
            localStorage.removeItem("accessToken")
            localStorage.removeItem("user")
        }
    },[accessToken, user])

    const signin = (user, remember) => {
        const { authToken, email } = user

        if(remember) {
            localStorage.setItem("accessToken", authToken)
            localStorage.setItem("user", email)
        } else {
            sessionStorage.setItem("accessToken", authToken)
            sessionStorage.setItem("user", email)
        }
        setAccessToken(authToken)
        setUser(email)
    }

    const signout = () => {
        setAccessToken('')
        clearCart()
    }

    const validToken = () => {
        if(!accessToken) return false

        try {
            jwtDecode(accessToken)
        } catch(error) {
            return false
        }
        const decoded = jwtDecode(accessToken)
        const now = Date.now().valueOf() / 1000

        if (typeof decoded.exp !== 'undefined' && decoded.exp < now) {
            return false
        }
        return true
    }

    const isAdmin = async () => {
        if (!accessToken) return false;

        const response = await userService.isAdmin(accessToken);
        return response.status === 200;
    };

    const getID = async (email) => {
        if (!accessToken) return null;

        const fetchUser = await userService.getUserByEmail(email, accessToken);
        return fetchUser.id || null;
    };

    return(
        <AuthContext.Provider value={{accessToken, validToken, isAdmin, getID, user, signin, signout}}>
            {children}
        </AuthContext.Provider>)
}

export const useAuth = () => useContext(AuthContext)