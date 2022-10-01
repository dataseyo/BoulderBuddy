import express from 'express'
import { uuid } from 'uuidv4'

import BoulderModel from '../models/BoulderModel.js'
import UserModel from '../models/UserModel.js'

// VIEW ALL BOULDERS
export const viewBoulders = (req, res) => {

}

// CREATE NEW BOULDER
export const createBoulder = async (req, res) => {
    if (req.session.passport) {
        const boulder = new BoulderModel({
            name: "test",
            grade: 5,
            crag: "test",
            id: uuid()
        })
        UserModel.findByIdAndUpdate(
            // id: 
            req.session.passport.user, 
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
    } else {
        res.send("Not Logged In")
    }

    // if (req.session.passport) {
    //     UserModel.findById(req.session.passport.user, (err, docs) => { 
    //         if (err) {
    //             res.send(err)
    //         } else {
    //             // const boulder = new BoulderModel({
    //             //     name: req.body.name,
    //             //     grade: req.body.grade,
    //             //     crag: req.body.crag,
    //             //     id: uuid()
    //             // })

    //             docs.boulders(
    //                 {$push: {
    //                     name: "zach"
    //                 }}
    //             )
            
    //         }
    //     })
    // } else {
    //     res.send("Not Logged In!")
    // }

    // try {
    //     BoulderModel.save()
    //     res.send("New Boulder successfully created.")
    // } catch (err) {
    //     console.log(`Error: ${err}`)
    // }
}

// DELETE BOULDER
export const deleteBoulder = (req, res) => {

}

// EDIT BOULDER
export const editBoulder = (req, res) => {
    
}
