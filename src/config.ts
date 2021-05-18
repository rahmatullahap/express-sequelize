import rc from 'rc';
/**
 * Debug level
 */
type DebugLevel = 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'fatal';

/**
 * Configuration data structure
 *
 * @export
 * @interface Config
 */
export interface Config {
  LOG_LEVEL: DebugLevel;
  APP_PORT: number;
  TIMEZONE: string;
  PROVIDER_SECRET: string;
  MYSQL_HOST: string;
  MYSQL_PORT: number;
  MYSQL_DATABASE: string;
  MYSQL_USERNAME: string;
  MYSQL_PASSWORD: string;
  httpServer: {
    secure: boolean;
    allowedOrigins: string[];
    key?: string;
    cert?: string;
  };
}

export const configDefault: Config = {
  LOG_LEVEL: 'error',
  APP_PORT: 80,
  TIMEZONE: '+07:00',
  PROVIDER_SECRET: 'provider-secret',
  MYSQL_HOST: 'localhost',
  MYSQL_PORT: 3306,
  MYSQL_DATABASE: 'mydatabase',
  MYSQL_USERNAME: 'root',
  MYSQL_PASSWORD: null,
  httpServer: {
    secure: false,
    allowedOrigins: ['*'],
    key: 'server.key',
    cert: 'server.crt',
  },
};

export const config = rc('api', configDefault) as Config;
