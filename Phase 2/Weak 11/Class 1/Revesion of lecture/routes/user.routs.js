import express from 'express';
import { registeruser } from '../controller/user.controller.js';
import {login} from '../controller/user.controller.js'
import {dashboard} from '../controller/user.controller.js'

const router = express.Router()

router.get("/register" , registeruser)
router.get("/login",login)
router.get("/admin",dashboard)

export default router;  
