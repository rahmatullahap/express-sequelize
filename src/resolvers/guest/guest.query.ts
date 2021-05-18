import { where, Sequelize, Op } from 'sequelize';
import { GuestModel } from '../model';
import { SearchGuestQueryArgs } from '.';

/**
 * Query for get guests
 *
 * @export
 * @param {any} _
 * @param {any} args
 * @param {any} ctx current context
 * @returns
 */
export async function searchQuery(req, res): Promise<any> {
  const args = req.body as SearchGuestQueryArgs;
  const data = await GuestModel.findAndCountAll({
    where: {
      [Op.or]: [
        {
          name: where(
            Sequelize.fn('LOWER', Sequelize.col('name')),
            'LIKE',
            `%${(args?.keyword || '').toLowerCase()}%`
          )
        },
        {
          detail: where(
            Sequelize.fn('LOWER', Sequelize.col('detail')),
            'LIKE',
            `%${(args?.keyword || '').toLowerCase()}%`
          )
        }
      ]
    },
    order: [['name', 'ASC']],
    limit: args?.limit || 10,
    offset: args?.skip || 0
  });

  const ret = {
    results: data?.rows?.map((r) => r.toJSON()),
    count: data?.count
  };

  res.json(ret);
}
