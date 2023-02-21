import factory from './AddUserFactory'
import { UserData } from '@/slices/user/entities/UserEntity'
import { Request, Response } from 'express'

class AddUserController {
  async handle(request: Request, response: Response) {
    let { admin, confirmPassword, email, firstName, password, status, firstAcess, lastName, photo, description, githubUsername, job, skills } : UserData = request.body
    const firebaseUrl : string = request['file']?.firebaseUrl
    if(firebaseUrl){
      photo = firebaseUrl
    }

    try {
      const newUser = await factory.build({admin, confirmPassword, email, firstName, password, status, firstAcess, lastName, photo, description, githubUsername, job, skills})
      
      return response.status(201).json({ message: 'successfully create user!', data: newUser })
    } catch (error:any) {
      return response.status(500).json({message: error.message})
    }
  }
}

export default new AddUserController()