import { IAddUserRepository, IGetUserRepository } from '@/slices/user/repositories'
import { UserData, UserEntity } from '../../entities/UserEntity'
import { hash, genSalt } from 'bcrypt'


export class AddUserUseCase {
    constructor(
        private addUserRepository : IAddUserRepository,
        private getUserRepository : Omit<IGetUserRepository, 'getAll'>
    ){}
    async execute(data: UserData) {
        try {
            const userEntity = UserEntity.create(data)
            const existUser = await this.getUserRepository.getByEmail(data.email)            
            if(existUser) throw new Error('Email is already in use!')
            const salt = await genSalt(10)
            const newPassword = await hash(userEntity.password, salt)
            userEntity.password = newPassword            
            Reflect.deleteProperty(userEntity, 'confirmPassword')
            const user = await this.addUserRepository.add(userEntity)            
            return user
        } catch (error) {
            throw new Error(error.message)
        }
    }
}