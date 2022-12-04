import { PostData, PostEntity } from '@/slices/post/entities/PostEntity'
import { GetPostRepository } from '@/slices/post/repositories/GetPostRepository'

export class GetPostUseCase {
  constructor(
    private repository: GetPostRepository
  ){}

  async execute(query: string){
    try {
      const posts = await this.repository.getAllPosts(query)
      return posts
    } catch (error:any) {
      return error.message
    }
  }
}