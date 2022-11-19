import { AddReactionRepository } from '@/slices/reaction/repository/AddReactionRepository'
import { fakeReaction } from '@/slices/reaction/entities/ReactionEntity.spec'
import { mock, MockProxy } from 'jest-mock-extended'
import { AddReactionUseCase } from './AddReactionUseCase'

describe('test add reaction useCase', () => {
  let addReactionRepository: MockProxy<AddReactionRepository>
  beforeAll(async() => {
    addReactionRepository = mock()
    addReactionRepository.addReaction.mockResolvedValue(undefined)
  })
  it('successfully add Reaction', async() => {
    const reaction = await new AddReactionUseCase(addReactionRepository).execute(fakeReaction)
    expect(reaction).toBe(undefined)
  })
})