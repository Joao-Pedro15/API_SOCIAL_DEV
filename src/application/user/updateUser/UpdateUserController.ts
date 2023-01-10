import factory from './UpdateUserFactory'
import { Request, Response } from 'express'
import { UserData } from '@/slices/user/entities/UserEntity'

class UpdateUserController {
  async handle(request: Request, response: Response) {
    const data = request.body.data as Partial<UserData>
    const id = request.body.id as string
    try {
      const user = await factory.build(id, data)
      return response.status(204).json(user)
    } catch (error) {
      return response.status(500).json({message: error.message})
    }
  }
}

export default new UpdateUserController()