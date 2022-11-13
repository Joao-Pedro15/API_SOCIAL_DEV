import { UserEntity, UserData } from "@/slices/user/entities/UserEntity"

export interface GetUserRepository{
    getAllUsers () : Promise<UserData[] | null>
    getUserByEmail (email: string) : Promise<UserData | null>
    getUserById (id: number) : Promise<UserData | null>
}

