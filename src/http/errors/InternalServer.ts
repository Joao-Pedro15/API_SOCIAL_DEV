import { HTTP_STATUS } from "../statusCode";
import { AppError } from "./AppError";

export class InternalServer extends AppError {
  constructor(message: string='Internal server error', statusCode:number=HTTP_STATUS.INTERNAL_SERVER_ERROR){
    super(message, statusCode)
  }
}