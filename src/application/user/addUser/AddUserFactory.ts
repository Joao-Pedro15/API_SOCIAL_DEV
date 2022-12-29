import { UserData } from '@/slices/user/entities/UserEntity'
import { AddUserUseCase } from '@/slices/user/useCases/addUser/AddUserUseCase'
import { AddUserRepository, GetUserRepository } from '@/slices/user/repositories'
import { User } from '@/application/user/prismaUser'

class AddUserFactory {
  async build(data: UserData) {
    try {
      const prismaUser = new User()
      const addUserRepository = new AddUserRepository(prismaUser)
      const getUserRepository = new GetUserRepository(prismaUser)
      const addUser = await new AddUserUseCase(addUserRepository, getUserRepository).execute(data)
      return addUser
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

export default new AddUserFactory()