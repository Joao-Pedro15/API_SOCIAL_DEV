import { authentication } from './auth'
import { Request, Response, NextFunction } from 'express'

describe('testing authenticate method', () => {
  let request = { headers: { } } as Request
  let response = {} as Response
  const next = {} as NextFunction 

  it('not existing autorization in headers request', async () => {
    const res = await authentication(request, response, next)
    expect(res).toEqual(false)
  })
})