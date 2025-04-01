import express from 'express'
import {registerUser , verifyUser , loginUser} from '../Controller/user.controller.js'

const router = express.Router()

router.post('/register' , registerUser )
router.get('/verify/:token' , verifyUser) //verify ke pass jo variable ka name hoga wo hmm : isske baad rakhenge
router.post('/login', loginUser)

export default router;

// ,verified,loginuser