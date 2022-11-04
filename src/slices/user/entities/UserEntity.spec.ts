import { UserEntity, UserData } from '@/slices/user/entities/UserEntity'
import exp from 'constants'

const UserEntityFake : UserData = {
    name: 'fakeUsername',
    email: 'joaoa@GMAIL.COM',
    admin: false,
    status: 'ativo',
    photo: 'fefe',
    password: 'monoemo',
    confirmPassword: 'monoemo'
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