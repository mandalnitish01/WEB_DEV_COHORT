import express from 'express'
import {registerUser , verifyUser , loginUser , getMe ,logoutUser} from '../Controller/user.controller.js'
import {isLoggedIn} from '../middleware/auth.middleware.js'
const router = express.Router()

router.post('/register' , registerUser )
router.get('/verify/:token' , verifyUser) //verify ke pass jo variable ka name hoga wo hmm : isske baad rakhenge
router.post('/login', loginUser)
router.get('/profile',isLoggedIn, getMe)
router.get('/logout',isLoggedIn, logoutUser)

export default router;

// ,verified,loginuser 
