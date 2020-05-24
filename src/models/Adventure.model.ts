// Libraries
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  FindManyOptions,
  getManager,
} from "typeorm";

@Entity()
export class Adventure {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 256 })
  name: string;

  @Column({ nullable: true, length: 1024 })
  description: string;

  @Column({ default: 0 })
  views: number;

  @Column({ nullable: true })
  addressLine1: string;
}

export function create(adventure: Adventure) {
  const newAdventure = new Adventure();

  newAdventure.name = adventure.name;
  newAdventure.description = adventure.description;
  newAdventure.addressLine1 = adventure.addressLine1;

  return getManager().save(newAdventure);
}

export function list(options?: FindManyOptions<Adventure>) {
  return getManager().getRepository(Adventure).find(options);
}
