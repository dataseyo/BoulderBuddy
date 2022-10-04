import React, { useEffect } from 'react'
import axios from 'axios'

import { useAuthContext } from '../../../context/AuthContext' 

type Props = {}

const User = (props: Props) => {
    const { userState } = useAuthContext()
    const user = JSON.parse(userState as string)

    useEffect(() => {
        const getBoulders = async () => {
            axios.get('')
        }
    })

    return (
        <div>
            <p className="text-light">User: {user?.data.username}</p>
            
        </div>
    )
}

export default User