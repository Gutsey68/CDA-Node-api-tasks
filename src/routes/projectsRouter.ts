import { Router } from 'express';
import projectsController from '../controllers/projectsController';

const projectsRouter = Router();

projectsRouter.get('/', projectsController.getProjects);
projectsRouter.post('/', projectsController.createProject);
projectsRouter.delete('/:id', projectsController.deleteProject);
projectsRouter.get('/:id', projectsController.getProjectById);
projectsRouter.put('/:id', projectsController.updateProject);

export default projectsRouter;
