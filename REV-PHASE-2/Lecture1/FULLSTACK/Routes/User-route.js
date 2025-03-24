import express from 'express';
import {registerUser} from '../Controller/User-Controller.js'

const Router = express.Router();

Router.post('/register', registerUser)


export default Router;
