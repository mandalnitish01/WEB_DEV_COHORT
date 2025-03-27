import express from 'express';
import {registerUser , verifyUser , loginUser , getMe , resetPassword , logoutUser , forgotPassword} from '../Controller/User-Controller.js'
import { isLoggedIn } from '../middleware/auth-middleware.js';
const Router = express.Router();

Router.post('/register', registerUser)
Router.get('/verify/:token' , verifyUser)
Router.post('/login' , loginUser)
Router.get('/me' , isLoggedIn , getMe)
Router.post('/resetpassword' , resetPassword)
Router.get('/logout' , logoutUser)
Router.post('/forgotpassword' , forgotPassword)

export default Router;
