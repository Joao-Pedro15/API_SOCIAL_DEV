import { LoginUserUseCase } from '@/slices/user/useCases/loginUser/LoginUserUseCase'
import { GetUserRepository } from '@/slices/user/repositories'
import { User } from '@/application/user/prismaUser'

class LoginUserFactory {
  async build(email: string, password?: string, external?: boolean) {
    try {
      const prismaUser = new User()
      const repository = new GetUserRepository(prismaUser)
      const login = new LoginUserUseCase(repository)
      return await login.execute(email, password, external)
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

export default new LoginUserFactory()