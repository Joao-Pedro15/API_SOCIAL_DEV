import express, { Request, Response } from 'express'

const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', async (request: Request, response: Response) => {
    return response.status(200).send('hello word')
})


export default app