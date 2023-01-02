import { Request, Response } from 'express';
import factory from './GetUserFactory'

class GetUserController {
  async handle(request: Request, response: Response) {
    try {
      const users = await factory.build({})
      return response.status(200).json(users)
    } catch (error) {      
      return response.status(500).json({message:'error', error: error.message})
    }
  }
}

export default new GetUserController()