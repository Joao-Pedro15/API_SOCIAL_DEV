import { PostData } from '../entities/PostEntity'

export interface AddPostRepository {
  addPostRepository(data: PostData): Promise<void>
}