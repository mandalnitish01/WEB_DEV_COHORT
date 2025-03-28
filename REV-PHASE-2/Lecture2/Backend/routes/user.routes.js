import express from "express";
import { registerUser , verify} from "../controllers/user.controller.js";

const router = express.Router();

router.post('/register' , registerUser)
router.get('/verify/:token' , verify)

export default router;