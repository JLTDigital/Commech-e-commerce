import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../models/Productmodel.js'

const router = express.Router()

// @desc - Fetch latest products
// @route - GET /api/latest/products
// @access - Public
router.get('/latest/products', asyncHandler(async (req, res) => {
  const products = await Product.find({ category: 'latest'})

  res.json(products)
}))

// @desc - Fetch computer & laptop products
// @route - GET /api/computers-laptops
// @access - Public
router.get('/computers-laptops', asyncHandler(async (req, res) => {
  const products = await Product.find({ category: 'computers/laptops'})

  res.json(products)
}))

// @desc - Fetch retro products
// @route - GET /api/retro
// @access - Public
router.get('/retro', asyncHandler(async (req, res) => {
  const products = await Product.find({ category: 'retro'})

  res.json(products)
}))

// @desc - Fetch smartphone products
// @route - GET /api/retro
// @access - Public
router.get('/smartphones', asyncHandler(async (req, res) => {
  const products = await Product.find({ category: 'smartphones'})

  res.json(products)
}))

// @desc - Fetch VR products
// @route - GET /api/retro
// @access - Public
router.get('/vr', asyncHandler(async (req, res) => {
  const products = await Product.find({ category: 'VR'})

  res.json(products)
}))

// @desc - Fetch a single product
// @route - GET /api/products/:id
// @access - Public
router.get('/product/:id', asyncHandler(async(req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    res.json(product)
    
  } else {
    res.status(404)
    throw new Error('Product not found')
  }

}))

export default router