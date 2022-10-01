import { useState } from 'react' 
import {Routes, Route} from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import Login from './pages/Registration/Login'
import Signup from './pages/Registration/Signup'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/login'  element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  )
}

export default App
