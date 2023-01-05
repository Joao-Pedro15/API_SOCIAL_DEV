import { DeleteUserRepository, GetUserRepository } from '@/slices/user/repositories'
import { DeleteUserUseCase } from '@/slices/user/useCases/deleteUser/DeleteUserUseCase'
import { User } from '@/application/user/prismaUser'

class DeleteUserFactory {
  async build(id: string) {
    try {
      const prismaUser = new User()
      const deleteRepository = new DeleteUserRepository(prismaUser)
      const getRepository = new GetUserRepository(prismaUser)
      await new DeleteUserUseCase(deleteRepository, getRepository).execute(id)
      return
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

export default new DeleteUserFactory()