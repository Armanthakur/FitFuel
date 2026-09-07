import express from 'express';
import getuserById from '../controller/userController.js';
import authMiddleware from '../middleware/authMiddleware.js';
import { updateUser } from '../controller/userController.js';

const userRoutes = express.Router();

userRoutes.get('/profile', authMiddleware, getuserById);
userRoutes.put('/update-profile', authMiddleware, updateUser);
export default userRoutes;
