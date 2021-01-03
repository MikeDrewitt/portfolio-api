import User from '../models/user.model';
import UserRole from './types/userRole.type';

export default class TokenEncodeInfo {
  id: number;
  username: string;
  role: UserRole;

  constructor(user: User) {
    this.id = user.id;
    this.username = user.username;
    this.role = user.role;
  }
}
