import { body } from "express-validator";

export function StringOptional(key:string) {
  return body(key).isString().withMessage(`${key} must be string`).optional({nullable: true, checkFalsy: true})
}

export function StringRequired(key:string) {
  return body(key).isString().withMessage(`${key} must be string and required`)
}

export function NumberRequired(key:string) {
  return body(key).isNumeric().withMessage(`${key} must be a number and required`)
}

export function BooleanRequired(key:string) {
  return body(key).isBoolean().withMessage(`${key} must be a boolean and required`)
}

export function NumberOptional(key:string) {
  return body(key).isNumeric().withMessage(`${key} must be a number`).optional({nullable: true, checkFalsy: true})
}

export function BooleanOptional(key:string) {
  return body(key).isBoolean().withMessage(`${key} must be a boolean`).optional({nullable: true, checkFalsy: true})
}

export function DateOptional(key:string) {
  return body(key).isDate().withMessage(`${key} must be a date`).optional({nullable: true, checkFalsy: true})
}

export function DateRequired(key:string) {
  return body(key).isDate().withMessage(`${key} must be a date`)
}

export function ArrayRequired(key:string) {
  return body(key).isArray().withMessage(`${key} must be a date`)
}

export function ArrayOptional(key:string) {
  return body(key).isArray().withMessage(`${key} must be a date`).optional({nullable: true, checkFalsy: true})
}