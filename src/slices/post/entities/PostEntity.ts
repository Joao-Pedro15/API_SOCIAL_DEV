import { Post, Comment, Reaction, User } from '@prisma/client'

export interface PostData extends Post {
  content: string,
  title: string
  userCreated: string,
  userUpdated: string | null
  admin: boolean,
  createdAt: Date
  updatedAt: Date | null
}

export class PostEntity {
  public content: string
  public title: string
  public userCreated: string
  public userUpdated: string
  public admin?: boolean
  public createdAt?: Date
  public updatedAt?: Date
  constructor(data: PostData) {
    Object.assign(this, data)
    this.createdAt = new Date()
    this.updatedAt = null
    this.userUpdated = null
    if(!data.admin) {
      this.admin = false
    }
  }

  static create(data:PostData) : PostEntity | Error {
    if(!PostEntity.validate(data)) throw new Error('Error in create post')
    const post = new PostEntity(data)
    return post
  }

  static validate(data:PostData) : boolean {
    if(data.content.trim().length <= 0) return false
    return true
  }

}