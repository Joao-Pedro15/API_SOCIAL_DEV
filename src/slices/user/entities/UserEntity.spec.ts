import { UserEntity, UserData } from '@/slices/user/entities/UserEntity'
import exp from 'constants'

export const UserEntityFake : UserData = {
    name: 'fakeUsername',
    email: 'joaoa@GMAIL.COM',
    admin: false,
    status: 'ativo',
    photo: 'https://link-da-foto',
    password: 'senha123',
    confirmPassword: 'senha123'
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