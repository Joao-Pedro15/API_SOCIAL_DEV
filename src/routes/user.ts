import { Router } from 'express'
import { uploadImage } from '@/middlewares/firebase-storage'
import { Multer } from '@/middlewares/multer'

import addUserController from '@/application/user/addUser/AddUserController'
import getUserController from '@/application/user/getUser/GetUserController'
import loginUserController from '@/application/user/loginUser/LoginUserController'
import deleteUserController from '@/application/user/deleteUser/DeleteUserController'
import updateUserController from '@/application/user/updateUser/UpdateUserController'

const router = Router()

router.post('/addUser', Multer.single('file'), uploadImage, addUserController.handle)

router.get('/getUsers', getUserController.handle)

router.post('/loginUser', loginUserController.handle)

router.delete('/deleteUser/:id', deleteUserController.handle)

router.put('/updateUser', updateUserController.handle)

export default router