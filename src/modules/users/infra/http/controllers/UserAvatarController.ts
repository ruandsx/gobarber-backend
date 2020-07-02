import { container } from 'tsyringe';
import { Request, Response } from 'express';

import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';

export default class UserAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const { user, file } = request;

    const updateUserAvatar = container.resolve(UpdateUserAvatarService);

    const userUpdated = await updateUserAvatar.execute({
      user_id: user.id,
      avatarFilename: file.filename,
    });

    return response.json(userUpdated);
  }
}
