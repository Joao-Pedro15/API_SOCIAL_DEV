import { PostData } from '../entities/PostEntity'

export interface IAddPostRepository {
  add(data: PostData): Promise<void>
}

export class AddPostRepository {
  constructor(
    private repository: IAddPostRepository
  ) {}

  async add(data: PostData) {
    return await this.repository.add(data)
  }
}