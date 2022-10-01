import express from 'express'

import { createBoulder, deleteBoulder, editBoulder, viewBoulders } from '../controllers/BoulderController.js'

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Boulder Test')
})

// CREATE NEW BOULDER
router.post('/add', createBoulder)


export default router;