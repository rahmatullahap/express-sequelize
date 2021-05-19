import { Sequelize } from 'sequelize';
import { defineUserModel } from './user';

/**
 * this will setup model and its relationship
 * @param db - sequalize instance
 */
export function setupModels(db: Sequelize): void {
  defineUserModel(db);
}

export * from './user';
