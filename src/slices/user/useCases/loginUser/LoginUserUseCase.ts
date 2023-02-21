import { IGetUserRepository } from '@/slices/user/repositories'
import { compareSync } from 'bcrypt'

export class LoginUserUseCase {
  constructor(private getUserRepository: IGetUserRepository) {}

  async execute(email: string, password?: string, external?: boolean) {
    try {
      const user = await this.getUserRepository.getByEmail(email)
      if(!user) throw new Error('not found user')
      if(!external && !compareSync(password, user.password)) throw new Error('Invalid password')
      return user
    } catch (error) {
      throw new Error(error.message)
    }
  }
}