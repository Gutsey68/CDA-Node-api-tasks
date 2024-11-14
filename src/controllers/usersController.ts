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
    res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  const userId = Number(req.params.id);
  try {
    usersServices.deleteUser(userId);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getUserById = async (req: Request, res: Response) => {
  const userId = Number(req.params.id);
  try {
    const user = usersServices.getUserById(userId);
    res.status(200).json({ message: 'User retrieved successfully', data: user });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updateUser = async (req: Request, res: Response) => {
  const userId = Number(req.params.id);
  const { name } = req.body;
  try {
    usersServices.updateUser(userId, name);
    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const usersController = { getUsers, createUser, deleteUser, getUserById, updateUser };

export default usersController;