import { Router } from 'express';
import commentsRouter from './commentsRouter';
import projectsRouter from './projectsRouter';
import tasksRouter from './tasksRouter';
import usersRouter from './usersRouter';

const router = Router();
router.use('/users', usersRouter);
router.use('/tasks', tasksRouter);
router.use('/projects', projectsRouter);
router.use('/comments', commentsRouter);

export default router;
