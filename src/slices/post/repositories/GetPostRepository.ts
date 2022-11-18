import { PostData } from '../entities/PostEntity'

export interface GetPostRepository {
  getAllPosts(query: string) : Promise<PostData[] | null>
  getPostsByFollowers(userId: number) : Promise<PostData[] | null>
  getPostsByUser(userId: number) : Promise<PostData[] | null>
}