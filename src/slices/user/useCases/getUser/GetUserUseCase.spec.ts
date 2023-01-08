import { MockProxy, mock } from 'jest-mock-extended'
import { UserEntityFake } from '../../entities/UserEntity.spec'
import { GetUserRepository } from '../../repositories'
import { GetUserUseCase } from './GetUserUseCase'

describe('addUser', () => {
    let getUserRepository : MockProxy<GetUserRepository>
    beforeEach(async () => {
        getUserRepository = mock()
        getUserRepository.getByEmail.mockResolvedValue(UserEntityFake)
        // getUserRepository.mockResolvedValue(UserEntityFake)
        getUserRepository.getAll.mockResolvedValue([UserEntityFake, UserEntityFake])
    })

    it('testing method getUserByEmail from class getUserRepository', async () => {
        const user = await new GetUserUseCase(getUserRepository).getByEmail('joao@gmail.com')
        expect(user).toEqual(UserEntityFake)
    })
//     it('testing method getUserById from class getUserRepository', async () => {
//       const user = await new GetUserUseCase(getUserRepository).getUserById(2)
//       expect(user).toEqual(UserEntityFake)
//   })
  it('testing method getAllUsers from class getUserRepository', async () => {
    const user = await new GetUserUseCase(getUserRepository).getAll({})
    expect(user.length).toEqual(2)
})

})
