export interface CommentData {
  postId: number
  content: string
  userId: number
  reactions?: number[] | null 
}

export class CommentEntity {
  public postId: number
  public content: string
  public userId: number
  public reactios?: number[] | null
  constructor(data: CommentData) {
    Object.assign(this, data)
  }

  static create(data: CommentData) {
    if(!this.validate(data)) throw new Error('content not empty')
    return new CommentEntity(data)
  }

  static validate(data: CommentData) : boolean {
    if(!data.content || data.content.trim().length <= 0) return false
    return true
  }
}