import mongoose from "mongoose";

import BoulderModel from './BoulderModel.js'

const Schema = mongoose.Schema

const CragSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    boulders: {
        type: []
    },
    location: String
}, { collection: "crags"})

const CragModel = mongoose.model('Crag', CragSchema)
export default CragModel