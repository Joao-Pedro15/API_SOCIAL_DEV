import { LoginUserUseCase } from './LoginUserUseCase'
import { MockProxy, mock } from 'jest-mock-extended'
import { GetUserRepository } from '../../repositories'
import { UserEntityFake } from '@/slices/user/entities/UserEntity.spec'

describe('useCase login user', () => {
  let getUserRepository: MockProxy<GetUserRepository>
  beforeEach(() => {
    getUserRepository = mock()
    getUserRepository.getByEmail.mockResolvedValue(UserEntityFake)
  })


})