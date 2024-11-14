import { Router } from 'express';
import projectsController from '../controllers/projectsController';

const projectsRouter = Router();

projectsRouter.get('/', projectsController.getProjects);

export default projectsRouter;
