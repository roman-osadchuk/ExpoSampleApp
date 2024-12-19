import { env } from '../config/env';

export type Environments = 'prod' | 'dev' | 'staging' | 'local';
export const environment: Environments = env.ENV;
