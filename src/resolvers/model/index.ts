import { Sequelize } from 'sequelize';
import { defineGuestModel } from './guest';

/**
 * this will setup model and its relationship
 * @param db - sequalize instance
 */
export function setupModels(db: Sequelize): void {
  defineGuestModel(db);
}

export * from './guest';
