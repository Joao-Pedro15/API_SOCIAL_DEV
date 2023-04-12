import { PostData, PostEntity } from '@/slices/post/entities/PostEntity'
import { randomUUID } from 'crypto'
import MockDate from 'mockdate'

export const PostEntityFake : PostData = {
  id: randomUUID(),
  userCreated: 'ro9iuhgfriugh',
  content: 'this content post',
  admin: true,
  title: "Post title",
  createdAt: new Date()  ,
  updatedAt: null,
  userUpdated: null
}

describe('user', () => {

  beforeAll(async () => {
    MockDate.set(new Date())
  }) 
  afterAll(async () => {
    MockDate.reset()
  })

  it('create user successfully!', () => {
      const user = new PostEntity(PostEntityFake)
      expect(user).toBeTruthy()
      expect(user).toEqual({...PostEntityFake, createdAt: new Date()})
  })    
})