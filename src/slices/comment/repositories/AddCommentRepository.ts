import { CommentData } from '@/slices/comment/entities/CommentEntity'

export interface AddCommentRepository {
  addComment(data: CommentData) : Promise<void>
}