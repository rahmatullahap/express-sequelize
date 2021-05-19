import { Router } from 'express';
import { HakAkses } from '../model';
import {
  addUserMutation,
  removeUserMutation,
  updateUserMutation
} from './user.mutation';
import { searchUserByIdQuery, searchUserQuery } from './user.query';

export interface SearchUserQueryArgs {
  keyword: string;
  limit: number;
  skip: number;
}

export interface AddUserMutationArgs {
  unitid: number;
  nama: string;
  password: string;
  hakakses: HakAkses;
}

export interface UpdateUserMutationArgs {
  unitid: number;
  nama: string;
  password: string;
  hakakses: HakAkses;
}

const userRouter = Router();
userRouter.get('/', searchUserQuery);
userRouter.get('/:id', searchUserByIdQuery);
userRouter.post('/add', addUserMutation);
userRouter.delete('/delete/:id', removeUserMutation);
userRouter.put('/edit/:id', updateUserMutation);

export default userRouter;
