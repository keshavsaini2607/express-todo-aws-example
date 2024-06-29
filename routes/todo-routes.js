import { Router } from 'express';
import { getTodos, createTodo } from '../controllers/todo-controller.js';
const router = Router();


router.get('/', getTodos);

router.post('/create', createTodo);

export default router;
