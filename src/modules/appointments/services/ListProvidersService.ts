import { injectable, inject } from 'tsyringe';

import CacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import User from '@modules/users/infra/typeorm/entities/User';

interface IRequest {
  user_id: string;
}

@injectable()
class ListProvidersService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('CacheProvider')
    private cacheProvider: CacheProvider
  ) {}

  public async execute({ user_id }: IRequest): Promise<User[]> {
    let providers = await this.cacheProvider.recover<User[]>(
      `providers-list:${user_id}`
    );

    if (!providers) {
      providers = await this.usersRepository.findAllProviders({
        except_user_id: user_id,
      });

      console.log('query realizada');

      await this.cacheProvider.save(`providers-list:${user_id}`, providers);
    }

    return providers;
  }
}

export default ListProvidersService;
