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
  deleteProduct,
  createProduct,
  updateProduct
} from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'


router.route('/product/:id').get(getProductById).delete(protect, admin, deleteProduct).put(protect, admin, updateProduct)
router.route('/products/all').get(getAllProducts)
router.route('/products').post(protect, admin, createProduct)
router.route('/latest/products').get(getProducts)
router.route('/computers-laptops').get(getComputerLaptopProducts)
router.route('/retro').get(getRetroProducts)
router.route('/smartphones').get(getSmartphoneProducts)
router.route('/vr').get(getVrProducts)

export default router