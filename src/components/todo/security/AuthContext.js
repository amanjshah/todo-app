import {createContext, useContext, useState} from "react";

// Create a Context
const AuthContext= createContext()

// Create a hook that allows other classes to make use of the Context
export const useAuth = () => useContext(AuthContext)

// Share the Context with other components
export default function AuthProvider({children}) {

    // Put some state in the Context
    const [isAuthenticated, setAuthentication] = useState(false)
    const [authenticationAttempted, setAuthenticationAttempted] = useState(false)
    const [number, setNumber] = useState(0)
    setInterval(() => setNumber(number + 1), 10000)

    function login(username, password) {
        if (username === 'aman' && password === 'dummy') {
            setAuthentication(true)
            return true
        }
        setAuthenticationAttempted(true)
        return false
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, setAuthentication, authenticationAttempted, setAuthenticationAttempted, number, login}}>
            {children}
        </AuthContext.Provider>
    )
}