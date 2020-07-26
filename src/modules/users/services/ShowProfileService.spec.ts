import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import ShowProfileService from './ShowProfileService';

let fakeUsersRepository: FakeUsersRepository;
let showProfile: ShowProfileService;

describe('ShowProfile ', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    showProfile = new ShowProfileService(fakeUsersRepository);
  });

  it('should be able to show user profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Test',
      email: 'testuser@email.com',
      password: '123456',
    });

    const profile = await showProfile.execute({
      user_id: user.id,
    });

    expect(profile.name).toBe('Test');
    expect(profile.email).toBe('testuser@email.com');
  });

  it('should not be able to show profile from non-existing user', async () => {
    await expect(
      showProfile.execute({
        user_id: 'non-existent-id',
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
