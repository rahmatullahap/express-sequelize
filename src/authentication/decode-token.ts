import { verify } from 'jsonwebtoken';
import { UserContext } from './user-context';
import { config } from '../config';
const { PROVIDER_SECRET } = config;

/**
 * Decode token and save the payload as user context
 *
 * @export
 * @param {string} token token
 * @returns {UserContext} token payload as user context
 */
export function decodeToken(token: string): UserContext {
  const payload: any = verify(token, PROVIDER_SECRET);
  if (!payload) {
    throw new Error('Invalid token');
  }
  if (!payload.account_id) {
    throw new Error('Invalid token');
  }
  return {
    accountId: payload.account_id
  };
}
