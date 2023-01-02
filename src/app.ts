import './config/module-alias'
import 'dotenv/config'
import cors from 'cors'
import express, { Request, Response } from 'express'
import { users } from './routes'


const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.use('/users', users.default)

app.get('/', async (request: Request, response: Response) => {
    return response.status(200).send('hello word')
})

app.get('/testando', async (request: Request, response: Response) => {
    return response.status(200).json([
        { name: "Joao", age: 19 },
        { name: "Pedro", age: 20 },
        { name: "Correa", age: 21 },
        { name: "Monteiro", age: 22 },
    ])
})


export default app