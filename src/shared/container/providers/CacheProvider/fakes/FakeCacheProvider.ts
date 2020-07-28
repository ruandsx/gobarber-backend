import ICacheProvider from '../models/ICacheProvider';

export default class FakeCacheProvider implements ICacheProvider {
  private cache: object[] = [];

  save(key: string, value: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  recover(key: string): Promise<string> {
    throw new Error('Method not implemented.');
  }

  invalidate(key: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
