import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import axios from 'axios'

export const useSignup = () => {
    const [error, setError] = useState<String | null>(null)
    const [isLoading, setIsLoading] = useState<boolean | null>(null)
    const dispatch = useAuthContext()

    const signup = async (username: string, password: string) => {
        setIsLoading(true)
        setError(null)

        try {
            const response = await axios.post('/user/register', {username, password}, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            // save user to local storage
            localStorage.setItem('user', JSON.stringify(response))

            // update auth context

            setIsLoading(false)
        } catch (error: any) {
            setError(error)
            setIsLoading(false)
        }

        
    }

    return {signup, error, isLoading}
}