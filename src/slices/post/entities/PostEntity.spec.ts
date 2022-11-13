import { PostData, PostEntity } from '@/slices/post/entities/PostEntity'
import exp from 'constants'

export const PostEntityFake : PostData = {
  userId: 1,
  content: 'this content post',
  comments: [1, 3, 5],
  reactions: [3, 5, 7],
  status: true
}

describe('user', () => {
    it('create user successfully!', () => {
        const user = PostEntity.create(PostEntityFake)
        expect(user).toBeTruthy()
        expect(user).toEqual(PostEntityFake)
    })    
})