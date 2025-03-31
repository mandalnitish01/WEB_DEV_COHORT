import express from 'express';
import {registerUser , verifyUser , loginUser} from '../Controller/User-Controller.js'
// , getMe , resetPassword , logoutUser , forgotPassword
// import  isLoggedIn  from '../middleware/auth-middleware.js';
// import { isLoggedIn } from '../middleware/auth-middleware.js';
const Router = express.Router();
Router.post('/register', registerUser)
Router.get('/verify/:token' , verifyUser)

// Router.get('/me' , isLoggedIn , getMe)
// Router.post('/resetpassword' , resetPassword)
// Router.get('/logout' , logoutUser)
// Router.post('/forgotpassword' , forgotPassword)

export default Router;

