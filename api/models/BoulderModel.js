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
    }, 
    crag: {
        type: String,
        required: true
    },
    id: {
        type: Number
    }
}, {collection: "boulders"})

const BoulderModel = mongoose.model("Boulder", BoulderSchema)
export default BoulderModel