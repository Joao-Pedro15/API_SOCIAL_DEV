export interface IDeleteUserRepository {
  delete(id: string): Promise<void>
}

export class DeleteUserRepository {
  constructor(
    private deleteUserRepository: IDeleteUserRepository,
  ){}

  async delete(id:string) {
    return await this.deleteUserRepository.delete(id)
  }
}