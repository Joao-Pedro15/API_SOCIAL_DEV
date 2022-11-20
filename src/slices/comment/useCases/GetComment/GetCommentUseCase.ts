import { GetCommentRepository } from '@/slices/comment/repositories/GetCommentRepository'

export class GetCommentUseCase {
  constructor(
    private repository: GetCommentRepository
  ){}

  async execute(postId: number) {
    try {
      const comments = await this.repository.getCommentsByPost(postId)
      if(!comments) throw new Error('not found comments by postId')
      return comments
    } catch (error:any) {
      return error.message
    }
  }
}