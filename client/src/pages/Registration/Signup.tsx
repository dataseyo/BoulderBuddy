import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import './styles.css'
import { useAuthContext } from '../../context/AuthContext'

type Props = {}

const Signup = (props: Props) => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    username: "",
    password: ""
  })

  const { userState, updateUser } = useAuthContext()

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // attempt to auth user
    console.log("auth")
    try {
      const result = await axios.post(
        "http://localhost:5000/user/register", 
        {username: form.username, password: form.password}, 
        {withCredentials: true}).then(result => {
          updateUser(JSON.stringify(result))
          localStorage.setItem('user', JSON.stringify(result))
        }).then(() => navigate('/'))
      return result
    } catch (error) {
      console.log(error, "error")
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm(prevForm => ({
      ...prevForm,
      [name] : value
    }))

    console.log(form)
  }
  
  return (
    <div className="registration-container">
      <h2 className="text-dark ms-2">Signup</h2>
      <form className="registration-form" onSubmit={(e) => onSubmit(e)} method="POST">
        <input
          name="username"
          placeholder="username"
          type="text"
          className=""
          value={form.username}
          onChange={(e) => onChange(e)}
        />

        <input
          name="password"
          placeholder="password"
          type="password"
          className=""
          value={form.password}
          onChange={(e) => onChange(e)}
        />

        <button
          className="btn btn-outline-success"
          type="submit"
          
        >
          Signup
        </button>
      </form>
    </div>
  )
}

export default Signup