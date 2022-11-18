interface ReactionData {
  userId: number
  postId?: number | null
  commentId?: number | null 
  reactionType: string
}

export class ReactionEntity {
  public userId: number
  public postId?: number | null
  public commentId?: number | null
  public reactionType: string
  constructor(data: ReactionData) {
    Object.assign(this, data)
  }
  
  static create(data: ReactionData) {
    if(!this.validate(data)) throw new Error('Invalid data object')
    return new ReactionEntity(data)
  }

  static validate(data: ReactionData) : boolean {
    if(!data.commentId && !data.postId) return false
    return true
  }


}