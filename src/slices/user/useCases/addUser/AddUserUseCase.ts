import { IAddUserRepository, IGetUserRepository } from '@/slices/user/repositories'
import { UserData, UserEntity } from '../../entities/UserEntity'


export class AddUserUseCase {
    constructor(
        private addUserRepository : IAddUserRepository | any,
        private getUserRepository : IGetUserRepository
    ){}
    async execute(data: UserData) {
        try {
            const userEntity = UserEntity.create(data)
            const existUser = await this.getUserRepository.getByEmail(data.email)            
            if(existUser) throw new Error('Email is already in use!')
            // const user = await this.addUserRepository.addUser(userEntity)
            return userEntity
        } catch (error:any) {
            throw new Error(error)
        }
    }
}