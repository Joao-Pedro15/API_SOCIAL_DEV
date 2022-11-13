import { GetUserRepository } from '@/slices/user/repositories'
import { UserData, UserEntity } from '../../entities/UserEntity'


export class GetUserUseCase {
    constructor(
        private getUserRepository : GetUserRepository
    ){}

    async getAllUsers() : Promise<UserData[] | null> {
        try {
            const users: UserData[] = await this.getUserRepository.getAllUsers()
            return users
        } catch (error) {
            return error
        }
    }
    
    async getUserByEmail(email: string) : Promise<UserData | null> {
        try {
            if(!email || typeof email !== 'string') throw new Error('Invalid email!')
            const user = await this.getUserRepository.getUserByEmail(email)
            return user    
        } catch (error) {
            return error
        }
    }

    async getUserById(id: number) : Promise<UserData | null> {
        try {
            if(!id) throw new Error('Invalid email!')
            const user = await this.getUserRepository.getUserById(id)
            return user    
        } catch (error) {
            return error
        }
    }
}