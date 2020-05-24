// Libraries
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  FindManyOptions,
  getManager,
} from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 32 })
  username: string;

  @Column({ nullable: true })
  location: string;
}

export function create(user: User) {
  const newUser = new User();

  newUser.username = user.username;
  newUser.location = user.location;

  return getManager().save(newUser);
}

export function list(options?: FindManyOptions<User>) {
  return getManager().getRepository(User).find(options);
}
