import express from 'express'
import { checkUserAuth } from '../controllers/user-controller';

const router = express.Router();

router.post('/login', checkUserAuth);

module.exports = router;
