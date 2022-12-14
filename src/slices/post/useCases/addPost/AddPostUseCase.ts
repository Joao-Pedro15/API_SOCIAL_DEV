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
      const user = await this.getUserRepository.getById(data.userId)
      if(!user) throw new Error('user not found')
      const post = await this.addPostRepository.add(data)
      return post
    } catch (error:any) {
      return error.message
    }
  }
}