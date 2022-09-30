import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import passport from 'passport'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import LocalStrategy from 'passport-local'

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
app.use(cors())
app.use(cookieParser())

// MONGODB DATABASE CONNECTION
const CONNECTION_STRING = 'mongodb+srv://gaharaz:18901234@cluster0.moyasce.mongodb.net/?retryWrites=true&w=majority'
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
passport.use(
    new LocalStrategy((username, password, done) => {
            UserModel.findOne({username: username}, function(err, user) {
                if (err) { 
                    return done(err);
                  }
                  if (!user) {
                    return done(null, false, { message: "Incorrect username" });
                  }
                  if (user.password !== password) {
                    return done(null, false, { message: "Incorrect password" });
                  }
                  return done(null, user);
                
            })
    }
))

const oneDay = 1000 * 60 * 60 * 24
app.use(
    session({
        secret: 'bigsecret',
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: oneDay }
    })
)

app.use(passport.session())

passport.serializeUser(function(user, done) {
    done(null, user.id);
});
  
passport.deserializeUser(function(id, done) {
    UserModel.findById(id, function(err, user) {
      done(err, user);
    });
  });

// ROUTINGG
app.use('/user', UserRoutes)
app.use('/boulder', BoulderRoutes)

app.use(passport.initialize())


