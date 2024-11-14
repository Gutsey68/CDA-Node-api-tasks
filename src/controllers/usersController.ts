import { Request, Response } from 'express';
import { usersServices } from '../services/usersServices';

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await usersServices.getlAllUsers();
    res.status(200).json({ message: 'Users retrieved successfully', data: users });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const createUser = async (req: Request, res: Response) => {
  const { username, email, password, role } = req.body;
  try {
    const user = await usersServices.createUser(username, email, password, role);
    res.status(201).json({ message: 'User created successfully', data: user });
  } catch (error: any) {
    res.status(409).json({ message: error.message });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  const userId = Number(req.params.id);
  try {
    const user = await usersServices.deleteUser(userId);
    res.status(200).json({ message: 'User deleted successfully', data: user });
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

const getUserById = async (req: Request, res: Response) => {
  const userId = Number(req.params.id);
  try {
    const user = await usersServices.getUserById(userId);
    res.status(200).json({ message: 'User retrieved successfully', data: user });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

const updateUser = async (req: Request, res: Response) => {
  const userId = Number(req.params.id);
  const { password } = req.body;
  try {
    const user = await usersServices.updateUser(userId, password);
    res.status(200).json({ message: 'User updated successfully', data: user });
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

const usersController = { getUsers, createUser, deleteUser, getUserById, updateUser };

export default usersController;
