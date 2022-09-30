import passport from 'passport'
import LocalStrategy from 'passport-local'
import UserModel from '../models/UserModel.js'

// docs: http://www.passportjs.org/packages/passport-local/
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