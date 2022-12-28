import './config/module-alias'
import express, { Request, Response } from 'express'
import { users } from './routes'

const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/users', users.default)

app.get('/', async (request: Request, response: Response) => {
    return response.status(200).send('hello word')
})


export default app