import { PostData, PostEntity } from '@/slices/post/entities/PostEntity'
import { GetPostRepository } from '@/slices/post/repositories/GetPostRepository'

export class GetPostUseCase {
  constructor(
    private repository: GetPostRepository
  ){}

  async execute(query: string){
    try {
      const posts = await this.repository.getAllPosts(query)
      if(posts!.length === 0) return null
      return posts
    } catch (error:any) {
      return error.message
    }
  }
}