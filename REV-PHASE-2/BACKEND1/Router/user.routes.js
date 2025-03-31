import express from 'express'
import {registeruser,loginuser,verifyuser} from '../Controller/user.controller.js'

const router = express.Router()

router.get('/register' ,registeruser )
router.get('/verify' ,verifyuser )
router.get('/login' ,loginuser )
export default router;

// ,verified,loginuser