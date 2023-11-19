import { createContext, useContext, useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [accessToken, setAccessToken] = useState(sessionStorage.getItem("accessToken") || '')
    const [user, setUser] = useState(sessionStorage.getItem("user") || '')

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

    return(
        <AuthContext.Provider value={{accessToken, validToken, user, signin, signout}}>
            {children}
        </AuthContext.Provider>)
}

export const useAuth = () => useContext(AuthContext)