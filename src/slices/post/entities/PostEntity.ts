
export type PostData = {
  content: string,
  userId: number,
  comments: number[],
  reactions: number[],
  status: boolean
}

export class PostEntity {
  public content: string
  public userId: number
  public comments: number[]
  public reactions: number[]
  public status: boolean
  constructor(data: PostData) {
    Object.assign(this, data)
    data.status = true
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