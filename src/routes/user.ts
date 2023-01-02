import addUserController from '@/application/user/addUser/AddUserController'
import getUserController from '@/application/user/getUser/GetUserController'
import { Router } from 'express'

const router = Router()

router.post('/addUser', addUserController.handle)

router.get('/getUsers', getUserController.handle)

export default router