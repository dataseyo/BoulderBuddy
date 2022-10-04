import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import passport from 'passport'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import LocalStrategy from 'passport-local'
import {} from 'dotenv/config'

import BoulderRoutes from './routes/BoulderRoutes.js'
import UserRoutes from './routes/UserRoutes.js'
import UserModel from './models/UserModel.js'

// INITIALIZE APP
const app = express()
const PORT = process.env.PORT | 5000

app.listen(PORT, () => {
    console.log(`App running on port: ${PORT}`)
})

// MIDDLEWARE
app.use(express.json())

const corsOptions = {
    origin: 'http://127.0.0.1:5173',
    credentials: true
}
app.use(cors(corsOptions))
app.use(cookieParser())

// MONGODB DATABASE CONNECTION
const CONNECTION_STRING = process.env.MONGO_URI
mongoose.connect(CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on("open", () => {
    console.log('Connected to DB')
})

db.on("error", (err) => {
    console.log(`DB error: ${err}`)
})

// AUTH



// ROUTINGG
app.use('/user', UserRoutes)
app.use('/boulder', BoulderRoutes)



