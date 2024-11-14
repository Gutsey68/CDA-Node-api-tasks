import { Router } from 'express';
import tasksController from '../controllers/tasksController';

const tasksRouter = Router();

tasksRouter.get('/', tasksController.getTasks);

export default tasksRouter;
