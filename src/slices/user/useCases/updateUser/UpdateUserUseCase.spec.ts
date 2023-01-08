import { UpdateUserUseCase } from './UpdateUserUseCase'
import { GetUserRepository, UpdateUserRepository } from '../../repositories'
import { mock, MockProxy } from 'jest-mock-extended'

describe('testing useCase by updateUser', () => {
  let getUserRepository: MockProxy<GetUserRepository>
  let updateUserRepository: MockProxy<UpdateUserRepository>
  beforeEach(() => {
    getUserRepository = mock()
    updateUserRepository = mock()

    getUserRepository.getById.mockResolvedValue(null)
    updateUserRepository.update.mockResolvedValue({})
  })

  it('testing with not exist user', async () => {
    try {
      await new UpdateUserUseCase(updateUserRepository, getUserRepository).execute('rughru', { admin: true })
    } catch (error) {
      expect(error.message).toEqual('not found user')
    }
  })
})