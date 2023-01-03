import { Router } from 'express'
import { uploadImage } from '@/middlewares/firebase-storage'
import { Multer } from '@/middlewares/multer'

import addUserController from '@/application/user/addUser/AddUserController'
import getUserController from '@/application/user/getUser/GetUserController'
import loginUserController from '@/application/user/loginUser/LoginUserController'


const router = Router()

router.post('/addUser', Multer.single('file'), uploadImage, addUserController.handle)

router.get('/getUsers', getUserController.handle)

router.post('/loginUser', loginUserController.handle)

export default router