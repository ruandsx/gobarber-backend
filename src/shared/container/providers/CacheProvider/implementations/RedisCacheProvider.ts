import Redis, { Redis as RedisClient } from 'ioredis';
import cacheConfig from '@config/cache';

import ICacheProvider from '../models/ICacheProvider';

export default class SESCacheProvider implements ICacheProvider {
  private client: RedisClient;

  constructor() {
    this.client = new Redis(cacheConfig.config.redis);
  }

  public async save(key: string, value: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  public async recover(key: string): Promise<string> {
    throw new Error('Method not implemented.');
  }

  public async invalidate(key: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
