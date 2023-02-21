import factory from './GetUserByIdFactory'
import { Request, Response } from 'express'

class GetUserByIdController {
  async handle(request: Request, response: Response) {
    try {
      const user = factory.build(request.params.id)
      return user
    } catch (error) {
      return response.status(500).json({message: error.message})
    }
  }
}

export default new GetUserByIdController()