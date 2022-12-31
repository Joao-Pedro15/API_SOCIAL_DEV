import { UserEntity, UserData } from "@/slices/user/entities/UserEntity"

export interface IGetUserRepository{
    // getAll () : Promise<UserData[] | null>
    getByEmail (email: string) : Promise<Partial<UserData> | null>
    getById (id: string) : Promise<Partial<UserData> | null>
}


export class GetUserRepository {
    constructor(
        private getUserRepository: IGetUserRepository
    ){}

    async getByEmail(email: string) {
        return await this.getUserRepository.getByEmail(email)
    }

    async getById(id: string) {
        return await this.getUserRepository.getById(id)
    }
}
