import { CommentData } from '@/slices/comment/entities/CommentEntity'

export interface GetCommentRepository {
  getCommentsByPost(postId:number) : Promise<CommentData[] | null>
}