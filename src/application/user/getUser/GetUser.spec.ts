import request from 'supertest'
import app from '../../../server/index'

describe('/getUsers', () => {
  it('should return users successfully', (done) => {
    request(app).get('/users/getUsers')
    .expect(200)
    .end((err, response) => {
      expect(response.statusCode).toBe(200)
      done()
    })
  })
})