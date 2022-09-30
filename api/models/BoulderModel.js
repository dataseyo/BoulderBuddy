import mongoose from 'mongoose'

const Schema = mongoose.Schema

const BoulderSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    grade: {
        type: Number,
        required: true
    }
}, {collection: "boulders"})

const BoulderModel = mongoose.model("User", BoulderSchema)
export default BoulderModel