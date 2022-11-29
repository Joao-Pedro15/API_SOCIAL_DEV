import { AddPostUseCase } from './AddPostUseCase'
import { PostData, PostEntity } from '@/slices/post/entities/PostEntity'
import { AddPostRepository } from '@/slices/post/repositories/AddPostRepository'
import { GetUserRepository } from '@/slices/user/repositories/'
import { mock, MockProxy } from 'jest-mock-extended'
import { UserEntityFake } from '@/slices/user/entities/UserEntity.spec'

describe('testing useCase by addpost', () => {
  let getRepository: MockProxy<GetUserRepository>
  let addRepository: MockProxy<AddPostRepository>
  beforeEach(() => {
    getRepository = mock()
    addRepository = mock()
    getRepository.getUserById.mockResolvedValue(UserEntityFake)
    addRepository.addPostRepository.mockResolvedValue(undefined)
  })

})