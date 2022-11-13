import { MockProxy, mock } from 'jest-mock-extended'
import { UserEntityFake } from '../../entities/UserEntity.spec'
import { GetUserRepository } from '../../repositories'
import { GetUserUseCase } from './GetUser'

describe('addUser', () => {
    let getUserRepository : MockProxy<GetUserRepository>
    beforeEach(async () => {
        getUserRepository = mock()
        getUserRepository.getUserByEmail.mockResolvedValue(UserEntityFake)
        getUserRepository.getUserById.mockResolvedValue(UserEntityFake)
        getUserRepository.getAllUsers.mockResolvedValue([UserEntityFake, UserEntityFake])
    })

    it('testing method getUserByEmail from class getUserRepository', async () => {
        const user = await new GetUserUseCase(getUserRepository).getUserByEmail('joao@gmail.com')
        expect(user).toEqual(UserEntityFake)
    })
    it('testing method getUserById from class getUserRepository', async () => {
      const user = await new GetUserUseCase(getUserRepository).getUserById(2)
      expect(user).toEqual(UserEntityFake)
  })
  it('testing method getAllUsers from class getUserRepository', async () => {
    const user = await new GetUserUseCase(getUserRepository).getAllUsers()
    expect(user.length).toEqual(2)
})

})
