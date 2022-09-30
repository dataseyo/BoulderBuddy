import mongoose from "mongoose";

import BoulderModel from './BoulderModel.js'

const Schema = mongoose.Schema

const CragSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    boulders: {
        type: [BoulderModel]
    },
    location: String
})

const CragModel = mongoose.model('Crag', CragSchema)
export default CragModel