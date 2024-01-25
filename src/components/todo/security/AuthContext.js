import {createContext, useContext, useState} from "react";
import {api} from "../api/ApiClient"
import {executeBasicAuthDummyEndpoint} from "../api/AuthenticationApiService";

// Create a Context
const AuthContext= createContext()

// Create a hook that allows other classes to make use of the Context
export const useAuth = () => useContext(AuthContext)

// Share the Context with other components
export default function AuthProvider({children}) {

    // Put some state in the Context
    const [isAuthenticated, setAuthentication] = useState(false)
    const [authenticationAttempted, setAuthenticationAttempted] = useState(false)
    const [username, setUsername] = useState(null)
    const [number, setNumber] = useState(0)
    const [token, setToken] = useState()

    setInterval(() => setNumber(number + 1), 10000)

    async function login(username, password) {
        const basicAuthToken = 'Basic ' + window.btoa(username + ":" + password)
        try {
            const response = await executeBasicAuthDummyEndpoint(basicAuthToken)
            if (response.status == 200) {
                setAuthentication(true)
                setUsername(username)
                setToken(basicAuthToken)
                setAuthenticationAttempted(true)
                api.interceptors.request.use(
                  (config) => {
                      config.headers.Authorization = basicAuthToken
                      return config
                  }
                )
                return true
            }
            return failLoginAttempt()
        } catch (error) {
            return failLoginAttempt()
        }
    }

    function logout() {
        setAuthentication(false)
        setAuthenticationAttempted(false)
        setToken(null)
        setUsername(null)
    }

    function failLoginAttempt() {
        logout()
        setAuthenticationAttempted(true)
        return false
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, authenticationAttempted, login, logout, username, token}}>
            {children}
        </AuthContext.Provider>
    )
}