import React from 'react'

import { useAuthContext } from '../../context/AuthContext'

type Props = {}

const Navbar = (props: Props) => {
  const { updateUser, userState } = useAuthContext()

  const logout = () => {
    localStorage.removeItem("user")
    updateUser(null)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top mask-custom shadow-0">
    <div className="container">
        <a className="navbar-brand" href="/">
          <span style={{color: "white"}}>Boulder</span>
          <span style={{color: "green"}}>Buddy</span>
        </a>
      <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <i className="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/crags">Crags</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/profile">Profile</a>
          </li>

          
          {
            !userState && 
            <><li className="nav-item">
            <a className="nav-link" href="/login">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/signup">Signup</a>
            </li></>
          }

          {/* check that user is logged in and, if so,
              display logout button
          */}
          {
            userState && 

            <button 
            className='btn btn-outline-light'
            onClick={logout}
          >
            Logout
          </button>
          }
        </ul>
        <ul className="navbar-nav d-flex flex-row">
          <li className="nav-item me-3 me-lg-0">
            <a className="nav-link" href="#!">
              <i className="fas fa-shopping-cart"></i>
            </a>
          </li>
          <li className="nav-item me-3 me-lg-0">
            <a className="nav-link" href="#!">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="nav-item me-3 me-lg-0">
            <a className="nav-link" href="#!">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar