import factory from './DeleteUserFactory'
import { Request, Response } from 'express'

class DeleteUserController {
  async handle(request: Request, response: Response) {
    const id = request.params.id
    try {
      await factory.build(id)
      return response.status(204).json({message: 'successfully delete user'})
    } catch (error) {
      return response.status(500).json({message: error})
    }
  }
}

export default new DeleteUserController()