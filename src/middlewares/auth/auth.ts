import { NextFunction, Request, Response } from "express";
import { verify, decode } from "jsonwebtoken";

export async function authentication(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) return false

  const [, token] = authHeader.split(" ");

  try {
    verify(token, process.env.JWT_SECRET);

    const { sub: userId } = decode(token);
    return next();
  } catch (err) {
    return response.status(401).end();
  }
}