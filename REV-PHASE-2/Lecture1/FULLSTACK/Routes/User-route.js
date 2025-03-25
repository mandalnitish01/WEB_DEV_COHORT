import express from 'express';
import {registerUser , verifyUser} from '../Controller/User-Controller.js'

const Router = express.Router();

Router.post('/register', registerUser)
Router.get('/verify/:token' , verifyUser)

export default Router;
