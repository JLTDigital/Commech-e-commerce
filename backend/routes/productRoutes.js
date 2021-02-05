import express from 'express'
const router = express.Router()
import { 
  getComputerLaptopProducts, 
  getProductById, 
  getProducts, 
  getRetroProducts, 
  getSmartphoneProducts, 
  getVrProducts 
} from '../controllers/productController.js'

router.route('/latest/products').get(getProducts)
router.route('/computers-laptops').get(getComputerLaptopProducts)
router.route('/retro').get(getRetroProducts)
router.route('/smartphones').get(getSmartphoneProducts)
router.route('/vr').get(getVrProducts)
router.route('/product/:id').get(getProductById)

export default router