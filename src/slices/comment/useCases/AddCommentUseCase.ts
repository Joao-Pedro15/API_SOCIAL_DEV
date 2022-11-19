import { AddCommentRepository } from '../repositories/AddCommentRepository'
import { CommentData, CommentEntity } from '../entities/CommentEntity'

export class AddCommentUseCase {
  constructor(
    private addRepository: AddCommentRepository
  ){}

  async execute(data: CommentData) {
    try {
      const commentEntity = CommentEntity.create(data)
      const comment = await this.addRepository.addComment(commentEntity)
      return comment
    } catch (error:any) {
      return error.message
    }
  }
}