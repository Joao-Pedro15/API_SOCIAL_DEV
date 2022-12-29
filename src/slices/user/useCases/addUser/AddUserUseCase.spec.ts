import { MockProxy, mock } from 'jest-mock-extended'
import { UserEntityFake } from '../../entities/UserEntity.spec'
import { AddUserRepository, GetUserRepository } from '../../repositories'
import { AddUserUseCase } from './AddUserUseCase'

describe('addUser', () => {
    let addUserRepository : MockProxy<AddUserRepository>
    let getUserRepository : MockProxy<GetUserRepository>
    beforeEach(async () => {
        addUserRepository = mock()
        addUserRepository.add.mockResolvedValue({...UserEntityFake, email: 'samuel@gmail.com'})
        getUserRepository = mock()
        getUserRepository.getByEmail.mockResolvedValue(null)
    })

    it('should create and return error message email invalid! ', async () => {
        const user = await new AddUserUseCase(addUserRepository, getUserRepository).execute(UserEntityFake) as any
        expect(user.message).toEqual(undefined)
    })
})
