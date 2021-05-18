import { Guest, GuestModel } from '../model';
import { AddGuestMutationArgs, UpdateGuestMutationArgs } from '.';

/**
 * Mutation for create guest class
 *
 * @export
 * @param {any} _
 * @param {any} args
 * @param {any} ctx current context
 * @returns
 */
export async function addGuestMutation(req, res): Promise<any> {
  const args = req.body as AddGuestMutationArgs;
  const response = await GuestModel.create({
    name: args.name,
    nickname: args.nickname,
    detail: args.detail,
    age: args.age
  });
  const guest = response?.toJSON();
  res.json(guest as Guest);
}

/**
 * Mutation for delete guest class
 *
 * @export
 * @param {any} _
 * @param {any} args
 * @param {any} ctx current context
 * @returns
 */
export async function removeGuestMutation(req, res): Promise<any> {
  const id = req.params.id;
  try {
    // check if guest exists
    const guest = await GuestModel.findOne({
      where: {
        id
      }
    });
    if (!guest) {
      throw Error(`guest with id ${id} not found`);
    }

    // remove guest
    const remove = await GuestModel.destroy({
      where: {
        id
      }
    });
    if (!remove) {
      throw Error(`guest with id ${id} remove failed`);
    }

    res.json(guest);
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: error.message
    });
  }
}

/**
 * update guest
 * @export
 * @param {*} _
 * @param {GuestMutationUpdateGuestArgs} args
 * @returns {Promise<any>}
 */
export async function updateGuestMutation(req, res): Promise<any> {
  const args = req.body as UpdateGuestMutationArgs;
  const id = req.params.id;
  try {
    let response = await GuestModel.findOne({
      where: {
        id
      }
    });

    if (!response) {
      throw Error(`Guest with id ${id} not found`);
    }

    if (args.name) {
      response.set('name', args.name);
    }
    if (args.nickname) {
      response.set('nickname', args.nickname);
    }
    if (args.detail) {
      response.set('detail', args.detail);
    }
    if (args.age) {
      response.set('age', args.age);
    }

    response = await response.save();
    const result = response?.toJSON() as Guest;

    res.json(result);
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: error.message
    });
  }
}
