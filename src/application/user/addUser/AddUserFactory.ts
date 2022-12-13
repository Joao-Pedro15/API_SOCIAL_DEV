import { UserData } from '@/slices/user/entities/UserEntity'
import { AddUserRepository } from '@/slices/user/repositories'
import { AddUserUseCase } from '@/slices/user/useCases/addUser/AddUserUseCase'

class AddUserFactory {
  async build(data: UserData) {
    try {
      const repo1:any = {}
      const repo2:any = {}
      const addUser = await new AddUserUseCase(repo1, repo2).execute(data)
      return addUser
    } catch (error) {
      return error
    }
  }
}

export default new AddUserFactory()