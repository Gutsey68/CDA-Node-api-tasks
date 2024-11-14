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
  const deletedUser = await usersRepository.findById(userId);

  if (!deletedUser) {
    throw new Error('User not found');
  }

  return await usersRepository.deleted(userId);
};

const getUserById = async (userId: number) => {
  const user = await usersRepository.findById(userId);

  if (!user) {
    throw new Error('User not found');
  }
  return user;
};

const updateUser = async (userId: number, newPassword: string) => {
  const updatedUser = await usersRepository.findById(userId);

  if (!updatedUser) {
    throw new Error('User not found');
  }

  usersRepository.update(userId, newPassword);
};

export const usersServices = { getlAllUsers, createUser, deleteUser, getUserById, updateUser };
