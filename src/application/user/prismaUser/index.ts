import { Prisma } from "@/database/prisma";
import { UserData } from "@/slices/user/entities/UserEntity";

export class User {
  async add(data: UserData) : Promise<Partial<UserData>> {
    try {
      const user = await Prisma.user.create({
        data:{ ...data, admin: false }
      })
      return user
    } catch (error) {
      throw new Error(error.message)
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

  async getById(id: string) {
    try {
      const user = await Prisma.user.findUnique({ where: { id } })
      return user
    } catch (error) {
      throw new Error(error)
    }
  }

  async getAll(query: any) {
    try {
      const users = await Prisma.user.findMany()      
      return users
    } catch (error) {
      throw new Error(error)
    }
  }

  async delete(id: string) {
    try {
      await Prisma.user.deleteMany({ where: { id } })
      return
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async update(id: string, data: Partial<UserData>) {
    try {
      const user =  await Prisma.user.update({
        where: { id },
        data:{ ...data }
      })
      return user
    } catch (error) {
      throw new Error(error.message)
    }
  }
}