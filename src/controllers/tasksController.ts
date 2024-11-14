import { Request, Response } from 'express';
import { tasksServices } from '../services/tasksServices';

const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await tasksServices.getlAllTasks();
    res.status(200).json({ message: 'Tasks retrieved successfully', data: tasks });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const tasksController = { getTasks };

export default tasksController;
