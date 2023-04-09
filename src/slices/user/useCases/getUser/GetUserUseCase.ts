import { IGetUserRepository } from '@/slices/user/repositories'
import { UserData, UserEntity } from '../../entities/UserEntity'


export class GetUserUseCase {
    constructor(
        private getUserRepository : IGetUserRepository
    ){}

    async getAll(query:any) {
        try {
            const users: Partial<UserData>[] | [] = await this.getUserRepository.getAll(query)
            if(users.length === 0) throw new Error('not found user')
            return users
        } catch (error) {
            throw new Error(error.message)
        }
    }
    
    async getByEmail(email: string) : Promise<Partial<UserData> | null> {
        try {
            if(!email || typeof email !== 'string') throw new Error('Invalid email!')
            const user = await this.getUserRepository.getByEmail(email)
            return user    
        } catch (error) {
            return error
        }
    }

    async getById(id: string) : Promise<Partial<UserData> | null> {
        try {
            if(!id) throw new Error('Not passing id!')
            const user = await this.getUserRepository.getById(id)
            return user    
        } catch (error) {
            throw new Error(error.message)
        }
    }
}