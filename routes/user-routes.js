import express from 'express'
import { checkUserAuth } from '../controllers/user-controller.js';

const router = express.Router();

router.post('/login', checkUserAuth);

export default router;