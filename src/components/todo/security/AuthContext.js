import {createContext, useContext, useState} from "react";

// Create a Context
const AuthContext= createContext()

// Create hook that allows other classes to make use of the Context
export const useAuth = () => useContext(AuthContext)

// Share the Context with other components
export default function AuthProvider({children}) {

    // Put some state in the Context
    const [number, setNumber] = useState(0)
    setInterval(() => setNumber(number + 1), 10000)

    return (
        <AuthContext.Provider value={{number}}>
            {children}
        </AuthContext.Provider>
    )
}