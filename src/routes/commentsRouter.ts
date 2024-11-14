import { Router } from 'express';
import commentsController from '../controllers/commentsController';

const commentsRouter = Router();

commentsRouter.get('/', commentsController.getComments);

export default commentsRouter;
