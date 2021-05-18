import { ILogger } from '../connectors/logger';
import { Express } from 'express';
import guestRouter from './guest';
import authRouter from './auth';


export class Api {
  app: Express;
  logger: ILogger;
  constructor(app: Express) {
    this.app = app;
  }

  init() {
    this.app.use('/', authRouter);
    this.app.use('/guest', guestRouter);
  }
}
