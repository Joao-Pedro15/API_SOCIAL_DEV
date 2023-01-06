import { UserData } from '../entities/UserEntity'

export interface IUpdateUserRepository {
  update(id: string): Promise<Partial<UserData> | Error>
}

export class UpdateUserRepository {
  constructor(private repository: IUpdateUserRepository) {}

  async update(id: string) {
    return this.repository.update(id)
  }
}