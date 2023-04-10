import { HTTP_STATUS } from "../statusCode"

export class AppError extends Error {
  public readonly statusCodes: number
  constructor(message: string, statusCode: typeof HTTP_STATUS[keyof typeof HTTP_STATUS]) {
    super(message)
    this.statusCodes = statusCode
  }
}