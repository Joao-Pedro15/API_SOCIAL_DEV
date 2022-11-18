import { AddUserRepository, GetUserRepository } from '@/slices/user/repositories'
import { UserData, UserEntity } from '../../entities/UserEntity'


export class AddUserUseCase {
    constructor(
        private addUserRepository : AddUserRepository | any,
        private getUserRepository : GetUserRepository | any
    ){}
    async execute(data: UserData) {
        try {
            const userEntity = UserEntity.create(data)
            const existUser = this.getUserRepository.getUserByEmail(data.email)
            if(existUser) throw new Error('Email is already in use!')
            const user = await this.addUserRepository.addUser(userEntity)
            return user
        } catch (error:any) {
            return error
        }
    }
}