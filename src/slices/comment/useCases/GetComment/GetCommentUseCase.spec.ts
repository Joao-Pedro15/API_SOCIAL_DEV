import { CommentData } from '@/slices/comment/entities/CommentEntity'
import { GetCommentUseCase } from './GetCommentUseCase'
import { GetCommentRepository } from '@/slices/comment/repositories/GetCommentRepository'
import { mock, MockProxy } from 'jest-mock-extended' 

describe('testing useCase by get comments', () => {
  let repository: MockProxy<GetCommentRepository>
  beforeAll(() => {
    repository = mock()
    repository.getCommentsByPost.mockResolvedValue(null)
  })

  it('should failed in getting comments by post', async() => {
    const comments = await new GetCommentUseCase(repository).execute(1) as Error
    expect(comments).toEqual('not found comments by postId')    

  })
})