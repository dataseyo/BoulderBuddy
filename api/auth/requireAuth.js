import jwt from 'jsonwebtoken'

import UserModel from "../models/UserModel.js"

export const requireAuth = async (req, res, next) => {
    const {authorization} = req.headers

    if (!authorization) {
        res.status(404).json({error: "auth token required"})
    }

    const token = authorization.split(' ')[1]

    try {
        const {_id} = jwt.verify(token, process.env.SECRET)

        req.user = await UserModel.findOne({_id}).select('_id')
        next()
    } catch (error) {
        console.log(error)
        res.status(400).json({error: "Request not authorized"})
    }

}