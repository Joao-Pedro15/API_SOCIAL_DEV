import { UserEntity, UserData } from "@/slices/user/entities/UserEntity"

export interface IGetUserRepository{
    // getAll () : Promise<UserData[] | null>
    getByEmail (email: string) : Promise<Partial<UserData> | null>
    // getById (id: number) : Promise<UserData | null>
}


export class GetUserRepository {
    constructor(
        private getUserRepository: IGetUserRepository
    ){}

    async getByEmail(email: string) {
        return await this.getUserRepository.getByEmail(email)
    }
}
