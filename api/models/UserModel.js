import mongoose from 'mongoose'

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

const UserModel = mongoose.model("User", UserSchema)
export default UserModel