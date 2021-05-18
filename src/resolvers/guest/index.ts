import { Router } from 'express';
import {
  addGuestMutation,
  removeGuestMutation,
  updateGuestMutation
} from './guest.mutation';
import { searchQuery } from './guest.query';

export interface SearchGuestQueryArgs {
  keyword: string;
  limit: number;
  skip: number;
}

export interface AddGuestMutationArgs {
  name: string;
  nickname: string;
  detail: string;
  age: number;
}

export interface UpdateGuestMutationArgs {
  name: string;
  nickname: string;
  detail: string;
  age: number;
}

const guestRouter = Router();
guestRouter.get('/', searchQuery);
guestRouter.post('/add', addGuestMutation);
guestRouter.delete('/delete/:id', removeGuestMutation);
guestRouter.put('/edit/:id', updateGuestMutation);

export default guestRouter;
