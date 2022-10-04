import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import validator from 'validator'

const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    boulders: {
        type: []
    }
}, {collection: "users"})

// USER SCHEMA SIGNUP METHOD
UserSchema.statics.signup = async function(username, password) {

    // VALIDATION
    if (!username || !password) {
        throw Error("All fields required")
    }

    // check if email valid 
    // if (!validator.isEmail)

    // check if user already exists
    const exists = await this.findOne({ username })

    if (exists) {
        throw Error("Username already taken")
    }

    // if username isn't taken,
    // hash the password
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    // add new user to database
    const user = await this.create({ username, password: hash})

    return user
}

// USER SCHEMA LOGIN METHOD
UserSchema.statics.login = async function(username, password) {
    if (!username || !password) {
        throw Error("All fields required")
    }

    const user = await this.findOne({ username })

    if (!user) {
        throw Error("Incorrect username")
    }

    // else, check that passwords match
    const match = await bcrypt.compare(password, user.password)

    if (!match) {
        throw Error("Incorrect password")
    }

    // else, return user
    return user
}

const UserModel = mongoose.model("User", UserSchema)
export default UserModel