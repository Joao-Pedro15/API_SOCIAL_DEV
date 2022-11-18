import { PostEntity } from '@/slices/post/entities/PostEntity'
import { AddPostRepository } from '@/slices/post/repositories/AddPostRepository'
import { GetUserRepository } from '@/slices/user/repositories/GetUserRepository'


export class AddPostUseCase {
  constructor(
    private addPostRepository: AddPostRepository,
    private getUserRepository: GetUserRepository

    ) {}
  async execute(data: PostEntity) {
    try {
      const user = await this.getUserRepository.getUserById(data.userId)
      if(!user) throw new Error('user not found')
      const post = await this.addPostRepository.addPostRepository(data)
      return post
    } catch (error:any) {
      throw new Error(error.message)
    }
  }
}