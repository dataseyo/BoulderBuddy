import React, { useState, useContext } from 'react'
import axios from 'axios'

import './styles.css'
import { useAuthContext } from '../../context/AuthContext'

type Props = {}


const Login = (props: Props) => {
  const [form, setForm] = useState({
    username: "",
    password: ""
  })

  const { userState, updateUser } = useAuthContext()
  const [user, setUser] = useState(userState)

  console.log(user)
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // attempt to auth user
    console.log("auth")
    try {
      const result = await axios.post(
        "http://localhost:5000/user/login", 
        {username: form.username, password: form.password}, 
        {withCredentials: true}).then(result => {
          updateUser(JSON.stringify(result))
          localStorage.setItem("user", JSON.stringify(result));
        })
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
      <p>User: {userState}</p>
      <h2 className="text-dark ms-2">Login</h2>
      <form className="registration-form" onSubmit={(e) => onSubmit(e)} method="POST">
        <input
          name="username"
          placeholder="username"
          className=""
          value={form.username}
          onChange={(e) => onChange(e)}
        />

        <input
          name="password"
          placeholder="password"
          className=""
          value={form.password}
          onChange={(e) => onChange(e)}
        />

        <button
          className="btn btn-outline-success"
          type="submit"
          
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login