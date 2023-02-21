import { LoginUserUseCase } from './LoginUserUseCase'
import { MockProxy, mock } from 'jest-mock-extended'
import { GetUserRepository } from '../../repositories'
import { UserEntityFake } from '@/slices/user/entities/UserEntity.spec'

const passwordHash = '$2b$10$6qqEoaOP2HyWo2tUosLa2ulOeBq3LmcTov7QtdLTqi8pEwiKN2YrG'

describe('useCase login user', () => {
  let getUserRepository: MockProxy<GetUserRepository>
  beforeEach(() => {
    getUserRepository = mock()
    getUserRepository.getByEmail.mockResolvedValue({...UserEntityFake, password: passwordHash})
  })

  it('should return user successfully', async () => {
    const login = await new LoginUserUseCase(getUserRepository).execute(UserEntityFake.email!, UserEntityFake.password!)
    expect(login).toEqual({...UserEntityFake, password: passwordHash})
  })

  it('should return user with last param equal a true', async() => {
    const login = await new LoginUserUseCase(getUserRepository).execute(UserEntityFake.email!, undefined, true)
    expect(login).toEqual({...UserEntityFake, password: passwordHash })
  })

})