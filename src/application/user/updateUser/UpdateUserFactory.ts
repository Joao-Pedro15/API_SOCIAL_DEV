import { UserData } from '@/slices/user/entities/UserEntity'
import { GetUserRepository, UpdateUserRepository } from '@/slices/user/repositories'
import { UpdateUserUseCase }  from '@/slices/user/useCases/updateUser/UpdateUserUseCase'
import { User } from '@/application/user/prismaUser'

class UpdateUserFactory {
  async build(id: string, data: Partial<UserData>) {
    try {
      const prismaUser = new User()
      const getUserRepository = new GetUserRepository(prismaUser)
      const updateUserRepository = new UpdateUserRepository(prismaUser)
      const user = new UpdateUserUseCase(updateUserRepository, getUserRepository)
      return await user.execute(id, data)
    } catch (error) {
      throw new Error(error.message)
    }
  }
}
