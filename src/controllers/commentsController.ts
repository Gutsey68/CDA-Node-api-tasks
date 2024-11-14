import { Request, Response } from 'express';
import { commentsServices } from '../services/commentsServices';

const getComments = async (req: Request, res: Response) => {
  try {
    const comments = await commentsServices.getlAllComments();
    res.status(200).json({ message: 'Comments retrieved successfully', data: comments });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const commentsController = { getComments };

export default commentsController;
