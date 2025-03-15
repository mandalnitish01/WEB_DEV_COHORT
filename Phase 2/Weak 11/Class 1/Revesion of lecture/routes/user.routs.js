import express from 'express';
import { registeruser ,verifyUser } from '../controller/user.controller.js';


const router = express.Router()

router.post("/register" , registeruser)
router.get("/verify/:token" , verifyUser)


export default router;  

