import { GetUserRepository } from '@/slices/user/repositories'
import { GetUserUseCase } from "@/slices/user/useCases/getUser/GetUserUseCase"
import { User } from '../prismaUser'

class GetUserFactory {
  async build(query: any) {
    try {
      const prismaUser = new User()
      let getUserRepository = new GetUserRepository(prismaUser)
      let users = await new GetUserUseCase(getUserRepository).getAll(query)
      return users  
    } catch (error) {      
      throw new Error(error.message)
    }   
  }
}

export default new GetUserFactory()