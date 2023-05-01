import { NumberOptional, NumberRequired, StringRequired } from "../utils";

export const reactionSchema = [
  StringRequired("reactionType"),
  NumberRequired("userCreated"),
  NumberOptional("userUpdated")
]