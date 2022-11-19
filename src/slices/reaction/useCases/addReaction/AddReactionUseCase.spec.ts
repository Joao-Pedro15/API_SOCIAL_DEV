import { AddReactionRepository } from '@/slices/reaction/repository/AddReactionRepository'
import { fakeReaction } from '@/slices/reaction/entities/ReactionEntity.spec'
import { mock, MockProxy } from 'jest-mock-extended'
import { AddReactionUseCase } from './AddReactionUseCase'
import { GetPostRepository } from '@/slices/post/repositories/GetPostRepository'
import { PostEntityFake } from '@/slices/post/entities/PostEntity.spec'

describe('test add reaction useCase', () => {
  let addReactionRepository: MockProxy<AddReactionRepository>
  let getPostRepository: MockProxy<GetPostRepository>
  beforeAll(async() => {
    addReactionRepository = mock()
    getPostRepository = mock()
    addReactionRepository.addReaction.mockResolvedValue(undefined)
    getPostRepository.getPostById.mockResolvedValue(PostEntityFake)
  })
  it('successfully add Reaction', async() => {
    const reaction = await new AddReactionUseCase(addReactionRepository, getPostRepository).execute(fakeReaction)
    expect(reaction).toBe(undefined)
  })

  it('error in add reaction not found post by postId', async() => {
    getPostRepository.getPostById.mockResolvedValue(null)
    const addReactionError = await new AddReactionUseCase(addReactionRepository, getPostRepository).execute(fakeReaction) as Error
    expect(addReactionError).toEqual('cannot find post or comment')
  })
})