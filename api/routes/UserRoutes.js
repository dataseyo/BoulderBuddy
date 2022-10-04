import express from 'express'
import jwt from 'jsonwebtoken'
import passport from 'passport'
import session from 'express-session'

import UserModel from '../models/UserModel.js'


import { registerUser, loginUser, logoutUser } from '../controllers/UserController.js'

const router = express.Router()

router.get('/', (req, res) => {
    res.send("logged")
})

router.post("/login", loginUser)

// REGISTER
router.post('/register', registerUser)

// LOGOUT
router.post("/logout", (req, res) => {
    req.session.destroy()
    console.log("logged out")
    res.end()
})

// CURRENT USER
router.get('/currentuser', (req, res) => {
    if (req.session.passport) {
        console.log(req.session)
        res.json(req.session.passport)
    } else {
        res.json({msg: "no user"})
    }
    
})

export default router;