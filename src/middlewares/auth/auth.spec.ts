import { authentication } from './auth'
import { Request, Response, NextFunction } from 'express'
const fakeToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

describe('testing authenticate method', () => {
  let response = {} as Response
  let request = { headers: { } } as Request
  const next = {} as NextFunction 
  
  it('not existing autorization in headers request', async () => {
    const res = await authentication(request, response, next)
    expect(res).toEqual(false)
  })
  it('invalid token failed authenticate', async() => {
    request = { headers: { authorization: `Bearer ${fakeToken}` } } as Request
    const res = await authentication(request, response, next)
    expect(res).toBe('invalid signature')
  })

  it('invalid token bad format', async() => {
    request = { headers: { authorization: `Bearer eroigjroigjroig` } } as Request
    const res = await authentication(request, response, next)
    expect(res).toBe('jwt malformed')
  })

})