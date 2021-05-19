import { Sequelize, DataTypes, Model, ModelCtor } from 'sequelize';

export let UserModel: ModelCtor<Model<User>>;

/**
 * Define user class models
 *
 * @export
 * @param {Sequelize} db connection instance
 * @returns operation schedule model definition
 */
export function defineUserModel(db: Sequelize) {
  UserModel = db.define<Model<User>>(
    'users',
    {
      userid: {
        type: DataTypes.STRING,
        primaryKey: true
      },
      unitid: DataTypes.INTEGER,
      nama: DataTypes.STRING,
      password: DataTypes.STRING,
      hakakses: DataTypes.ENUM(HakAkses.administrator.toString(), HakAkses.admin.toString()),
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

export enum HakAkses {
  administrator,
  admin
}

/**
 * User Class Model data structure
 *
 * @export
 * @interface User
 */
export interface User {
  userid?: string;
  unitid: number;
  nama: string;
  password: string;
  hakakses: HakAkses;
}
