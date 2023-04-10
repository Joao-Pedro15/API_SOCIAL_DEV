import { HTTP_STATUS } from "../statusCode";
import { AppError } from "./AppError";

export class NotFound extends AppError {
  public readonly item: string
  constructor(item:string, message: string=`Not found ${item}`, statusCode: number=HTTP_STATUS.NOT_FOUND) {
    super(message, statusCode)
    this.item = item
  }
}