import { StringOptional, StringRequired, NumberOptional, NumberRequired } from "../utils"

export const postSchema = [
  StringOptional("title"),
  StringRequired("content"),
  NumberRequired("userCreated"),
  NumberOptional("userUpdated"),
]