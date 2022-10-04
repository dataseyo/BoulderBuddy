import express from 'express'

import {requireAuth} from '../auth/requireAuth.js'
import { createBoulder, deleteBoulder, editBoulder, viewBoulders } from '../controllers/BoulderController.js'

const router = express.Router()

router.use(requireAuth)

router.get('/list', viewBoulders)

// CREATE NEW BOULDER
router.post('/add', createBoulder)

router.post('/test', (req, res) => {
    const id = req.user._id
    console.log(id)
})

export default router;