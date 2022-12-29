import { Prisma } from "@/database/prisma";
import { UserData } from "@/slices/user/entities/UserEntity";

export class User {
  async add(data: UserData) : Promise<Partial<UserData>> {
    try {
      const user = await Prisma.user.create({
        data:{ ...data }
      })
      return user
    } catch (error) {
      throw new Error(error)
    }
  }

  async getByEmail(email: string) {
    try {
      const user = await Prisma.user.findUnique({
        where: { email }
      })
      return user
    } catch (error) {
      throw new Error(error)
    }
  }
}