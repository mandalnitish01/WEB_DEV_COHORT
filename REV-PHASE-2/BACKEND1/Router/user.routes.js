import express from 'express'
import {registeruser} from '../Controller/user.controller.js'

const router = express.Router()

router.post('/register' ,registeruser )

export default router;

// ,verified,loginuser