import { UserData } from '@/slices/user/entities/UserEntity'

export interface IAddUserRepository {
    add(user: UserData) : Promise<Partial<UserData> | null>
}

export class AddUserRepository {
    constructor(
        private addUserRepository: IAddUserRepository
    ){}

    async add(user: UserData) {
        return await this.addUserRepository.add(user)
    }
}