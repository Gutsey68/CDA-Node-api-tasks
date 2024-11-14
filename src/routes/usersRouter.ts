import { Router } from 'express';
import usersController from '../controllers/usersController';

const usersRouter = Router();

usersRouter.get('/', usersController.getUsers);
usersRouter.post('/', usersController.createUser);
usersRouter.delete('/', usersController.deleteUser);
usersRouter.get('/:id', usersController.getUserById);
usersRouter.put('/', usersController.updateUser);

export default usersRouter;
