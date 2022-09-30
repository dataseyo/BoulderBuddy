import express from 'express'
import jwt from 'jsonwebtoken'
import passport from 'passport'
import session from 'express-session'

import UserModel from '../models/UserModel.js'

const router = express.Router()

router.get('/', (req, res) => {
    // session=req.session
    // if (session.userid) {
    //     res.send(`Welcome User ${session.userid}`)
    // } else {
    //    res.send('Log In') 
    // }
    res.send("logged")
})

// LOGIN
// router.post('/login', (req, res) => {
//     passport.authenticate('local', {session: false}, (err, user, info) => {
//             if (err || !user) {
//                 return res.status(400).json({
//                     message: 'Something is not right',
//                     user : user
//                 });
//             }
    
//     req.login(user, {session: false}, (err) => {
//                if (err) {
//                    res.send(err);
//                }
//             });
//         });
// })

router.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/user');
  });

// REGISTER
router.post('/register', (req, res) => {
    UserModel.findOne({ username: req.body.username }, async (err, doc) => {
        if  (err) throw err
        if (doc) res.send("User already exists!")
        if (!doc) {
            // need to use bcrypt for password
            const password = req.body.password
            const newUser = new UserModel({
                username: req.body.username,
                password: password
            })

            await newUser.save() 
            res.send("User Created")
        }
    })
})

// LOGOUT
router.post("/logout", (req, res) => {
    req.session.destroy()
    console.log("logged out")
})

// CURRENT USER
router.get('/currentuser', (req, res) => {
    if (req.session) {
        console.log(req.session)
        res.json(req.session.passport)
    } else {
        res.json({msg: "no user"})
    }
    
})


export default router;