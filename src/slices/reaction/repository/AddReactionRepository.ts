import { ReactionEntity } from '@/slices/reaction/entities/ReactionEntity'

export interface AddReactionRepository {
  addReaction(data: ReactionEntity): Promise<void> 
}