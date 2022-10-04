import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createContext, useState } from 'react'

import './index.css'

import {AuthContextProvider} from './context/AuthContext'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider value={null}>
        <App />
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
