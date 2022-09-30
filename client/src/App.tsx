import { useState } from 'react' 
import {Routes, Route} from 'react-router-dom'

import './App.css'
import Home from './pages/Home/Home'
import Login from './pages/Registration/Login'
import Signup from './pages/Registration/Signup'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login'  element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  )
}

export default App
