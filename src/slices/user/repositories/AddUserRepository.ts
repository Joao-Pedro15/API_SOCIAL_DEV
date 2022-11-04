import { UserData } from '@/slices/user/entities/UserEntity'

export interface AddUserRepository {
    addUser(user: UserData) : Promise<UserData | null>
}