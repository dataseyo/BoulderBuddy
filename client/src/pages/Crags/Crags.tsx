import React from 'react'
import axios from 'axios'

import './styles.css'

type Props = {}

const Crags = (props: Props) => {
  const addBouder = () => {
    const user = JSON.parse(localStorage.getItem('user') as string)
    const token = user.data.token
    console.log(token)
    const data = {
      name: "test",
      grade: 0,
      crag: "LRC"
    }
    axios.post(
      'http://localhost:5000/boulder/add', 
      data,
      {
        headers: {"Authorization" : `Bearer ${token}`}
      },
      
    )
  }

  return (
    
    <div>
      <h1 className="text-light">Crags</h1>

      {/* test that boulder add works from frontend*/}
      <button onClick={addBouder} className="btn btn-outline-primary">
        Add Test Boulder
      </button>
    </div>
  )
}

export default Crags