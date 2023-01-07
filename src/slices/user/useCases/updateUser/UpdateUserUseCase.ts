import { IUpdateUserRepository, IGetUserRepository } from '../../repositories'

export class UpdateUserUseCase {
  constructor(
    private updateUserRepository: IUpdateUserRepository,
    private getUserRepository: IGetUserRepository
  ) {}

  async execute(id: string) {
    try {
      const user = await this.getUserRepository.getById(id)
      if(!user) throw new Error('not found user')
      return this.updateUserRepository.update(id)
    } catch (error) {
      throw new Error(error.message)
    }
  }
}