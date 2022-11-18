import { PostEntity } from '@/slices/post/entities/PostEntity'

export interface GetReactionRepository {
  getReactionsByPost(postId: number) : Promise<PostEntity[] | null>
}