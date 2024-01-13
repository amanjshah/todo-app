import {createContext, useContext, useState} from "react";

// Create a Context
const AuthContext= createContext()

// Create a hook that allows other classes to make use of the Context
export const useAuth = () => useContext(AuthContext)

// Share the Context with other components
export default function AuthProvider({children}) {

    // Put some state in the Context
    const [isAuthenticated, setAuthentication] = useState(false)
    const [number, setNumber] = useState(0)
    setInterval(() => setNumber(number + 1), 10000)
    const contextValue = {isAuthenticated, setAuthentication, number}

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}