import React, { useEffect, useState } from 'react'
import axios from 'axios'

type Props = {}

const Sends = (props: Props) => {
    const [boulders, setBoulders] = useState([])

    useEffect(() => {
        const getBoulders = async () => {
            const user = JSON.parse(localStorage.getItem('user') as string)
            const token = user.data.token
            console.log('fetching')
            const result = await axios.get(
                'http://localhost:5000/boulder/list',
                {
                headers: {"Authorization" : `Bearer ${token}`}
                },
            )

            setBoulders(result.data)
            
            console.log(result, 'result')
        }

        getBoulders()
    }, [])

  return (
    <div>
        <h1 className="text-light">Sends</h1>
        <ul>
            {
                boulders && 
                boulders.map((boulder, index) => {
                    return (
                        <li key={index}>
                            <p className="text-light">{boulder.boulder.name}</p>
                            <p className="text-light">{boulder.boulder.grade}</p>
                            <p className="text-light">{boulder.boulder.crag}</p>
                        </li>
                    )
                })

            }
        </ul>
    </div>
  )
}

export default Sends