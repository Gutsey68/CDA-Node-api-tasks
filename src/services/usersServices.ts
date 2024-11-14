import { usersRepository } from '../repositories/usersRepository';

const getlAllUsers = async () => {
  return await usersRepository.findAll();
};

const createUser = async (username: string, email: string, password: string, role: number) => {
  const existingUser = await usersRepository.findByEmail(email);

  if (existingUser) {
    throw new Error('Email is already used');
  }

  return await usersRepository.create(username, email, password, role);
};

const deleteUser = async (userId: number) => {
  usersRepository.deleted(userId);
};

const getUserById = async (userId: number) => {
  usersRepository.findById(userId);
};

const updateUser = async (userId: number, newName: string) => {
  usersRepository.update(userId, newName);
};

export const usersServices = { getlAllUsers, createUser, deleteUser, getUserById, updateUser };
