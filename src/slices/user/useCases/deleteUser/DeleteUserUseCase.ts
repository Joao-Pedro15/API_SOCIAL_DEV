import { IDeleteUserRepository, IGetUserRepository } from '../../repositories'

export class DeleteUserUseCase {
  constructor(
    private deleteUserRepository: IDeleteUserRepository,
    private getUserRepository: IGetUserRepository
    ) {}

    async execute(id: string) {
      try {
        const user = await this.getUserRepository.getById(id)
        if(!user) throw new Error('not found user')
        return await this.deleteUserRepository.delete(id)
      } catch (error) {
        throw new Error(error.message)
      }
    }
}