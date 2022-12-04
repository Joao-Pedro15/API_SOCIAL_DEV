import { GetPostUseCase }  from './GetPostUseCase'
import { GetPostRepository } from '@/slices/post/repositories/GetPostRepository'
import { PostEntity } from '@/slices/post/entities/PostEntity'
import { mock, MockProxy } from 'jest-mock-extended'

describe('testing useCase getPostUseCase', () => {
  let repository: MockProxy<GetPostRepository>
  beforeAll(() => {
    repository = mock()
    repository.getAllPosts.mockResolvedValue([])
  })
})