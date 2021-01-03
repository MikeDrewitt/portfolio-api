// Libraries
import { Entity, Column, FindManyOptions, getManager, } from 'typeorm';

import { Generic } from '@models/_generic.model';

@Entity()
export class Adventure extends Generic {
  @Column({ length: 256 })
  name: string;

  @Column({ nullable: true, length: 1024 })
  description: string;

  @Column({ default: 0 })
  views: number;

  @Column({ nullable: true })
  addressLine1: string;
}

export async function create(adventure: Adventure) {
  const newAdventure = new Adventure();

  newAdventure.name = adventure.name;
  newAdventure.description = adventure.description;
  newAdventure.addressLine1 = adventure.addressLine1;

  return getManager().save(newAdventure);
}

export async function update(adventure: Adventure) {
  return getManager().save(adventure);
}

export async function retrieve(id: number) {
  return getManager().getRepository(Adventure).findOne({ id, deletedAt: null });
}

export async function deleteRecord(id: number) {
  return getManager().softDelete(Adventure, { id });
}

export async function list(options?: FindManyOptions<Adventure>) {
  return getManager().getRepository(Adventure).find(options);
}

