import jwt from 'jsonwebtoken'

import UserModel from "../models/UserModel.js";

// function to generate JSON Web Tokens
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

export const registerUser = async (req, res) => {
    const { username, password } = req.body
    
    try {
        const user = await UserModel.signup(username, password)

        // create token
        const token = createToken(user._id)

        res.status(200).json({ username, token })
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

export const loginUser = async (req, res) => {
    const { username, password } = req.body

    try {
        const user = await UserModel.login(username, password)

         // create token
         const token = createToken(user._id)

        res.status(200).json({ username, token })
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

export const logoutUser = (req, res) => {

}