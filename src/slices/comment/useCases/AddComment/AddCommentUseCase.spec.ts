import { AddCommentUseCase } from './AddCommentUseCase'
import { AddCommentRepository } from '@/slices/comment/repositories/AddCommentRepository'
import { CommentData, CommentEntity } from '@/slices/comment/entities/CommentEntity'
import { fakeComment } from '@/slices/comment/entities/CommentEntity.spec'
import { mock, MockProxy } from 'jest-mock-extended'

describe('Testing addCommentUseCase', () => {
  let repository: MockProxy<AddCommentRepository>
  beforeAll(() => {
    repository = mock()
    repository.addComment.mockResolvedValue()
  })
  it('shoud successfully create comment and add', async() => {
    const commentEntity = CommentEntity.create(fakeComment)
    const comment = await new AddCommentUseCase(repository).execute(commentEntity)
    expect(comment).toEqual(undefined)
  })
})