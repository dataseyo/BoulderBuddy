import { createContext, useContext, useState, useEffect } from 'react'

type ContextType = {
    userState: string | null,
    updateUser: (userState: string | null) => void
}

export const AuthContext = createContext<ContextType>({
    userState: null,
    updateUser: () => {}
})

export const AuthContextProvider = (prop:
    {value?: string | null, children: JSX.Element | JSX.Element[]}) => {
    const [userState, setUserState] = useState<string | null>(null)

    // keep userState updated when application loads
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user') as string)

        if (user) {
            setUserState(JSON.stringify(user))
        }
    }, [])
    
    console.log('Auth state: ', userState)

    const updateUser = (userState: string | null) => {
        setUserState(userState)
        // localStorage.setItem("user", JSON.stringify(userState));
    }

    return (
        <AuthContext.Provider value={{userState, updateUser}}>
            { prop.children }
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    const context = useContext(AuthContext)
    return context
}