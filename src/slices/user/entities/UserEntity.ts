export type UserData = {
    name: string
    email: string
    status: string
    admin: boolean
    photo?: string
    password: string
    confirmPassword: string
}

export class UserEntity {
    public name: string
    public email: string
    public status: string
    public admin: boolean
    public photo?: string
    public password: string
    public confirmPassword: string
    private constructor(data: UserData){
        Object.assign(this, data)
    }   

    static create (data: UserData) {
        if(data.password !== data.confirmPassword) throw new Error("Password and ConfirmPassord not equals")
        const user = new UserEntity(data)
        return user
    }
}