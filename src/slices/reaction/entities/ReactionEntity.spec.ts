import { ReactionEntity, ReactionData } from './ReactionEntity'

let fakeReaction = {
  reactionType: 'love',
  userId: 2,
  commentId: 3,
  postId: null,
} 

describe('create entity Reaction', () => {
  it('create successfully entity reaction', () => {
    const reaction = ReactionEntity.create(fakeReaction)
    expect(reaction).toEqual(fakeReaction)
  })
})