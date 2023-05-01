import { AppError, InternalServer, NotFound } from '@/http'
import { PostData, PostEntity } from '@/slices/post/entities/PostEntity'
import { AddPostRepository } from '@/slices/post/repositories/AddPostRepository'
import { GetUserRepository } from '@/slices/user/repositories/GetUserRepository'


export class AddPostUseCase {
  constructor(
    private addPostRepository: AddPostRepository,
    private getUserRepository: GetUserRepository

    ) {}
  async execute(data: PostData) {
    try {
      const user = await this.getUserRepository.getById(data.userCreated)
      if(!user) throw new NotFound('user')
      const postValid = PostEntity.validate(data)
      if(!postValid) throw new AppError('Invalid content post', 400)
      const post = await this.addPostRepository.add(data)
      return post
    } catch (error:any) {
      if(error instanceof AppError) throw new AppError(error.message, error.statusCodes)
      throw new InternalServer()
    }
  }
}