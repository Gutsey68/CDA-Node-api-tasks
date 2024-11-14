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

const createProject = async (req: Request, res: Response) => {
  const { name, description, due_date, owner_id } = req.body;
  try {
    const project = await projectsServices.createProject(name, description, due_date, owner_id);
    res.status(201).json({ message: 'Project created successfully', data: project });
  } catch (error: any) {
    res.status(409).json({ message: error.message });
  }
};

const deleteProject = async (req: Request, res: Response) => {
  const projectId = Number(req.params.id);
  try {
    const project = await projectsServices.deleteProject(projectId);
    res.status(200).json({ message: 'Project deleted successfully', data: project });
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

const getProjectById = async (req: Request, res: Response) => {
  const projectId = Number(req.params.id);
  try {
    const project = await projectsServices.getProjectById(projectId);
    res.status(200).json({ message: 'Project retrieved successfully', data: project });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const updateProject = async (req: Request, res: Response) => {
  const projectId = Number(req.params.id);
  const { description, due_date } = req.body;
  try {
    const project = await projectsServices.updateProject(projectId, description, due_date);
    res.status(200).json({ message: 'Project updated successfully', data: project });
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

const projectsController = { getProjects, createProject, deleteProject, getProjectById, updateProject };

export default projectsController;
