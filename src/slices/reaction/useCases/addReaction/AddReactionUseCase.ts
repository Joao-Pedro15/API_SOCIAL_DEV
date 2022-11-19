import { AddReactionRepository } from '@/slices/reaction/repository/AddReactionRepository'
import { ReactionData, ReactionEntity } from '@/slices/reaction/entities/ReactionEntity'

export class AddReactionUseCase {
  constructor(
    private addRepository: AddReactionRepository
  ){}
  async execute(data: ReactionData) {
    try {
      const reactionEntity = ReactionEntity.create(data)
      const reaction = await this.addRepository.addReaction(reactionEntity)
      return reaction
    } catch (error:any) {
      return error.message
    }
  }
}