import express from 'express';
import {test} from '../controllers/user.controller.js';
const router=express.Router();
import { updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';
router.get('/test', test);
router.put('/update/:userId',verifyToken,updateUser);
export default router;