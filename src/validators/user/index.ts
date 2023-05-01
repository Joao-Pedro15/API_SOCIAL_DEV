import { BooleanOptional, StringOptional, StringRequired } from "../utils"

export const userSchema = [
  StringRequired("firstName"),
  StringOptional("lastName"),
  StringRequired("email"),
  StringOptional("status"),
  BooleanOptional("admin"),
  StringOptional("photo"),
  StringOptional("password"),
  BooleanOptional("firstAccess"),
  StringOptional("phone"),
  StringOptional("githubUsername"),
  StringOptional("job"),
  StringOptional("skills"),
  StringOptional("description")
]
