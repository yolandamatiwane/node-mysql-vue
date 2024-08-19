import express from 'express'
import { fetchUsers, fetchUser, deleteUser, insertUser, updateUser,loginUser} from '../controller/usersController.js'

import { checkUser } from '../middleware/authenticate.js'

const router = express.Router()

router.post('/login',checkUser,loginUser)

router.get('/users', fetchUsers)
router.get('/users/:id', fetchUser)
router.post('/users/insert',insertUser)
router.delete('/users/delete/:id',deleteUser)
router.patch('/users/edit/:id',updateUser)


export default router