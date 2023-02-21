import { GetUserRepository } from "@/slices/user/repositories"
import { GetUserUseCase } from "@/slices/user/useCases/getUser/GetUserUseCase"
import { User } from "../prismaUser"

class GetUserByIdFactory {
  async build(id: string) {
    try {
      const prismaUser = new User()
      const getUserRepository = new GetUserRepository(prismaUser)
      const user = new GetUserUseCase(getUserRepository)
      return await user.getById(id)
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

export default new GetUserByIdFactory()