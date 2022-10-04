import express from 'express'
import { uuid } from 'uuidv4'

import BoulderModel from '../models/BoulderModel.js'
import UserModel from '../models/UserModel.js'

// VIEW ALL BOULDERS
export const viewBoulders = (req, res) => {
    const id = req.user._id

    UserModel.findById(id, function (err, docs) {
        if (err) { res.status(400).send(err) }
        res.json(docs.boulders)
    })
}

// CREATE NEW BOULDER
export const createBoulder = async (req, res) => {
    const {name, grade, crag } = req.body
    const id = req.user._id

    const boulder = {
        name: name, 
        grade: grade,
        crag: crag
    }

    UserModel.findByIdAndUpdate(
        // id: 
        id,
        //update: 
        {
            $push: {
                boulders: {
                    boulder
                }
            }
        },
        // callback
        (err, result) => {
            if (err) {
                res.send(err)
            } else {
                res.send(result)
            }
        }
    )
    

}

// DELETE BOULDER
export const deleteBoulder = (req, res) => {

}

// EDIT BOULDER
export const editBoulder = (req, res) => {
    
}
