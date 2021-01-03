import User from '../models/User.model';

export function generic(req: any, res: any, next: any) {

  const { user = null, users = [], status = 200 }: { user: User, users: User[], status: number } = req;
  const response = user ? serialize(user) : users.map(serialize);

  res.status(status).send(response);
}

function serialize(user: User) {
  return {
    id: user.id,
    username: user.username,
    role: user.role,
    createdAt: user.createdAt,
  };
}
