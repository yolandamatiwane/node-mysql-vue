import express from 'express'
import { fetchFruits, fetchFruit, deleteFruit, insertFruit, updateFruit, addToCart} from '../controller/fruitsController.js'
const router = express.Router()
import { verifyAToken } from '../middleware/authenticate.js'

router.get('/fruits',fetchFruits)
router.get('/fruits/:id',fetchFruit)
router.delete('/fruits/delete/:id',deleteFruit)
router.post('/fruits/insert',insertFruit)
router.patch('/fruits/edit/:id',updateFruit)

// user wont purchase without signing in
router.post('/cart',verifyAToken,addToCart)
export default router
