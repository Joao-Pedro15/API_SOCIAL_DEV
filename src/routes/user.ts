import addUserController from '@/application/user/addUser/AddUserController'
import { Router } from 'express'

const router = Router()

router.post('/addUser', addUserController.handle)

export default router