import { UserEntity, UserData } from '@/slices/user/entities/UserEntity'
import exp from 'constants'

export const UserEntityFake : UserData = {
    firstName: 'fakeUsername',
    email: 'joao.monteiro@gmail.com',
    admin: false,
    status: 'Ativo',
    photo: 'https://link-da-foto',
    password: 'jojo',
    confirmPassword: 'jojo'
}

describe('user', () => {
    it('create user successfully!', () => {
        const user = UserEntity.create(UserEntityFake)
        expect(user).toBeTruthy()
        expect(user).toEqual(UserEntityFake)
    })    

    it('create user error', () => {
        const user = {...UserEntityFake, confirmPassword: 'mon'}
        expect(() => UserEntity.create(user)).toThrow()
    })
})