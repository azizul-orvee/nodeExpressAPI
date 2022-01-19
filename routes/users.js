import express from 'express';
import { createUser, getUsers, getUser, deleteUser,updateUser } from '../controller/users.js';

const router = express.Router();

router.get('/', getUsers)

router.get('/:id', getUser)

router.post('/', createUser)

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)




export default router;