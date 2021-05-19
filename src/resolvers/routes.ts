import { ILogger } from '../connectors/logger';
import { Express } from 'express';
import userRouter from './user';
import authRouter from './auth';


export class Api {
  app: Express;
  logger: ILogger;
  constructor(app: Express) {
    this.app = app;
  }

  init() {
    this.app.use('/', authRouter);
    this.app.use('/user', userRouter);
  }
}
