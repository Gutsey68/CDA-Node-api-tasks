import { Request, Response } from 'express';
import { projectsServices } from '../services/projectsServices';

const getProjects = async (req: Request, res: Response) => {
  try {
    const projects = await projectsServices.getlAllProjects();
    res.status(200).json({ message: 'Projects retrieved successfully', data: projects });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const projectsController = { getProjects };

export default projectsController;
