import express from 'express'
const router = express.Router()
import { 
  getComputerLaptopProducts, 
  getProductById, 
  getProducts, 
  getRetroProducts, 
  getSmartphoneProducts, 
  getVrProducts,
  getAllProducts,
  deleteProduct
} from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'


router.route('/products/all').get(getAllProducts)
router.route('/latest/products').get(getProducts)
router.route('/computers-laptops').get(getComputerLaptopProducts)
router.route('/retro').get(getRetroProducts)
router.route('/smartphones').get(getSmartphoneProducts)
router.route('/vr').get(getVrProducts)
router.route('/product/:id').get(getProductById).delete(protect, admin, deleteProduct)

export default router