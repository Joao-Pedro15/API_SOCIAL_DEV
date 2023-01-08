import { UserData } from '../entities/UserEntity'

export interface IUpdateUserRepository {
  update(id: string, data: Partial<UserData>): Promise<Partial<UserData> | Error>
}

export class UpdateUserRepository {
  constructor(private repository: IUpdateUserRepository) {}

  async update(id: string, data: Partial<UserData>) {
    return this.repository.update(id, data)
  }
}