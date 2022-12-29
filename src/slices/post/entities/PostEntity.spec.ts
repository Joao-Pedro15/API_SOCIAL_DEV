import { PostData, PostEntity } from '@/slices/post/entities/PostEntity'

export const PostEntityFake : PostData = {
  userId: 'ro9iuhgfriugh',
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