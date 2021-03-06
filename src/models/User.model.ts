// Libraries
import bcrypt from "bcrypt";
import { Entity, Column, FindManyOptions, Unique, getManager } from "typeorm";

import { Generic } from '@models/_generic.model';

import UserRole from '@constants/types/userRole.type';

@Entity()
@Unique(["username"])
export default class User extends Generic {
  @Column({ length: 32 })
  username: string;

  @Column({ length: 60 })
  hash: string;

  @Column({ default: UserRole.user })
  role: UserRole

  constructor(username: string) {
    super();

    this.username = username;
    this.role = UserRole.user;
  }

  public async create(password: string) {
    this.hash = await bcrypt.hash(password, 10);

    return await getManager().save(this);
  }

  public async update(updates: object) {
    return await getManager().update(User, this.id, updates);
  }

  public static async delete(id: number) {
    return await getManager().softDelete(User, { id });
  }

  public static async retrieve(id: number) {
    return await getManager().getRepository(User).findOne({ id, deletedAt: null });
  }

  public static async list(options?: FindManyOptions<User>) {
    return await getManager().getRepository(User).find({ ...options, deletedAt: null });
  }

  public static async authenticate(username: string, password: string) {
    const user = await getManager().getRepository(User).findOne({ username, deletedAt: null });

    if (!user) return null;

    const authenticated = await bcrypt.compare(password, user.hash);

    return authenticated ? user : null;
  }
}
