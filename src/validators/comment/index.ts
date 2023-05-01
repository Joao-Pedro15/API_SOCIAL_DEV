import { NumberOptional, NumberRequired, StringRequired } from "../utils";

export const commentSchema = [
  StringRequired("content"),
  NumberRequired("userCreated"),
  NumberOptional("userUpdated")
]