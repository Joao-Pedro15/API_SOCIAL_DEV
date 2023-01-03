import factory from './LoginUserFactory'
import { Request, Response } from 'express'

class LoginUserController {
  async handle(request: Request, response: Response) {
    const { email, password, external } = request.body
    try {
      const user = await factory.build(email, password, external)
      return response.status(200).json(user)
    } catch (error) {
      console.log(error.message);
      
      return response.status(500).json({message: error.message})
    }
  }
}


export default new LoginUserController()