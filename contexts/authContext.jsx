import { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext();

function AuthProvider({ children }) {
    const user = JSON.parse(localStorage.getItem('user'))
    const [role, setRole] = useState(user?.role)
    console.log(role);
    useEffect(() => {
        localStorage.removeItem('user')

    }, [])



    return <AuthContext.Provider value={{ role }}>
        {children}


    </AuthContext.Provider>
}

function useAuth() {
    const context = useContext(AuthContext)
    return context
}

export { AuthProvider, useAuth }



