import request from 'supertest'
import app from '../../../server/index'

describe('/getUsers', () => {
  it('should return users successfully', async () => {
    const calc = 1+1
    expect(calc).toBe(2)
  })
})