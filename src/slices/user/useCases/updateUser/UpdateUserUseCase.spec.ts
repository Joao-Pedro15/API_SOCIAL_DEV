import { UpdateUserUseCase } from './UpdateUserUseCase'
import { GetUserRepository, UpdateUserRepository } from '../../repositories'
import { mock, MockProxy } from 'jest-mock-extended'

describe('testing useCase by updateUser', () => {
  let getUserRepository: MockProxy<GetUserRepository>
  let updateUserRepository: MockProxy<UpdateUserRepository>
  beforeEach(() => {
    getUserRepository = mock()
    updateUserRepository = mock()
  })
})