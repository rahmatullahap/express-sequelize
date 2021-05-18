import { Sequelize, DataTypes, Model, ModelCtor } from 'sequelize';

export let GuestModel: ModelCtor<Model<Guest>>;

/**
 * Define guest class models
 *
 * @export
 * @param {Sequelize} db connection instance
 * @returns operation schedule model definition
 */
export function defineGuestModel(db: Sequelize) {
  GuestModel = db.define<Model<Guest>>(
    'guests',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true
      },
      name: DataTypes.STRING,
      nickname: DataTypes.STRING,
      detail: DataTypes.TEXT,
      age: DataTypes.INTEGER
    },
    {
      timestamps: true,
      hooks: {
        async beforeCreate(attributes) {
          const id = Math.random()
            .toString(36)
            .slice(2, 10)
            .toUpperCase();
          attributes.set('id', id);
        }
      }
    }
  );
}

/**
 * Guest Class Model data structure
 *
 * @export
 * @interface Guest
 */
export interface Guest {
  id?: string;
  name: string;
  nickname: string;
  detail: string;
  age: number;
}
