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
  updateProduct,
  createProductReview,
  getTopProducts
} from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'


router.route('/product/:id').get(getProductById).delete(protect, admin, deleteProduct).put(protect, admin, updateProduct)
router.route('/products/all').get(getAllProducts)
router.route('/products/top').get(getTopProducts)
router.route('/products').post(protect, admin, createProduct)
router.route('/products/:id/reviews').post(protect, createProductReview)
router.route('/latest/products').get(getProducts)
router.route('/computers-laptops').get(getComputerLaptopProducts)
router.route('/retro').get(getRetroProducts)
router.route('/smartphones').get(getSmartphoneProducts)
router.route('/vr').get(getVrProducts)

export default router