import { CommentData} from '@/slices/comment/entities/CommentEntity'
import { fakeComment } from '@/slices/comment/entities/CommentEntity.spec'
import { GetCommentUseCase } from './GetCommentUseCase'
import { GetCommentRepository } from '@/slices/comment/repositories/GetCommentRepository'
import { mock, MockProxy } from 'jest-mock-extended' 

let arrayComments = [
  fakeComment,
  fakeComment,
  fakeComment
]

describe('testing useCase by get comments', () => {
  let repository: MockProxy<GetCommentRepository>
  beforeAll(() => {
    repository = mock()
    repository.getCommentsByPost.mockResolvedValue(arrayComments)
  })

  it('should sucessfully getting comments by fakePost', async() => {
    const comments = await new GetCommentUseCase(repository).execute(2)
    expect(comments).toEqual(arrayComments)
  } )

  it('should failed in getting comments by post', async() => {
    repository.getCommentsByPost.mockResolvedValue(null)
    const comments = await new GetCommentUseCase(repository).execute(1) as Error
    expect(comments).toEqual('not found comments by postId')    
  })
})