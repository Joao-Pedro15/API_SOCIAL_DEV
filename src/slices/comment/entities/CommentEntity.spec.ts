import { CommentData, CommentEntity } from './CommentEntity'

export let fakeComment: CommentData = {
  content: 'opa',
  postId: 2,
  userId: 3,
  reactions: []
}

describe('create a entity comment', () => {
  
  it('successfully create a entity comment', () => {
    const comment = CommentEntity.create(fakeComment)
    expect(comment).toEqual(fakeComment)
  })

  it('try create a entity comment and return error', () => {
    const comment = {...fakeComment, content: ' '}
    expect(() => CommentEntity.create(comment)).toThrow('content not empty')
  })

})