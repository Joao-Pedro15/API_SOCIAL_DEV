export type UserData = {
    firstName: string
    lastName?: string
    firstAcess?: boolean
    email: string
    status: string
    admin: boolean
    photo?: string
    password: string
    confirmPassword: string
}

export class UserEntity {
    public firstName: string
    public lastName: string
    public email: string
    public status: string
    public admin: boolean
    public photo?: string
    public password: string
    public confirmPassword: string
    private constructor(data: UserData){
        Object.assign(this, data)
        this.status = 'Ativo'
        this.admin = false
    }   

    static create (data: UserData) {        
        if(data.password !== data.confirmPassword) throw new Error("Password and ConfirmPassord not equals")
        if(!this.validate(data)) throw new Error("Email, Password and firstName not empty")
        const user = new UserEntity(data)
        return user
    }

    static validate(data: UserData) {
        if(!(data.email) || !(data.password) || !(data.firstName)) return false
        return true
    }
}