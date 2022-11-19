import { AddReactionRepository } from '@/slices/reaction/repository/AddReactionRepository'
import { GetPostRepository } from '@/slices/post/repositories/GetPostRepository'
// import {  } from'@/slices/comment/repositories'
import { ReactionData, ReactionEntity } from '@/slices/reaction/entities/ReactionEntity'

export class AddReactionUseCase {
  constructor(
    private addRepository: AddReactionRepository,
    private getPostRepository: GetPostRepository
  ){}
  async execute(data: ReactionData) {
    
    try {
      const post = await this.getPostRepository.getPostById(data.postId)
      if(!post) throw new Error('cannot find post or comment')
      const reactionEntity = ReactionEntity.create(data)
      const reaction = await this.addRepository.addReaction(reactionEntity)
      return reaction
    } catch (error:any) {
      return error.message
    }
  }
}