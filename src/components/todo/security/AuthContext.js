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
    const [username, setUsername] = useState(null)
    const [number, setNumber] = useState(0)
    setInterval(() => setNumber(number + 1), 10000)

    function login(username, password) {
        if (username === 'aman' && password === 'dummy') {
            setAuthentication(true)
            setUsername(username)
            return true
        }
        setAuthenticationAttempted(true)
        setUsername(null)
        return false
    }

    function logout() {
        setAuthentication(false)
        setAuthenticationAttempted(false)
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, authenticationAttempted, login, logout, username}}>
            {children}
        </AuthContext.Provider>
    )
}