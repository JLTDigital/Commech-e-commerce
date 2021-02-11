import asyncHandler from 'express-async-handler'
import Product from '../models/Productmodel.js'

// @desc - Fetch latest products
// @route - GET /api/latest/products
// @access - Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({ category: 'latest'})

  res.json(products)
})

// @desc - Fetch computer & laptop products
// @route - GET /api/computers-laptops
// @access - Public
const getComputerLaptopProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({ category: 'computers/laptops'})

  res.json(products)
})

// @desc - Fetch retro products
// @route - GET /api/retro
// @access - Public
const getRetroProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({ category: 'retro'})

  res.json(products)
})

// @desc - Fetch smartphone products
// @route - GET /api/retro
// @access - Public
const getSmartphoneProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({ category: 'smartphones'})

  res.json(products)
})

// @desc - Fetch VR products
// @route - GET /api/retro
// @access - Public
const getVrProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({ category: 'VR'})

  res.json(products)
})

// @desc - Fetch a single product
// @route - GET /api/products/:id
// @access - Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @desc - Get all products
// @route - GET /api/products/all
// @access - public
const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})

  if (products) {
    res.json(products)
  } else {
    res.status(404)
    throw new Error('Products not found')
  }
})

// @desc - Delete a single product
// @route - DELETE /api/product/:id
// @access - Private / Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    await product.remove()
    res.json({ message: 'Product Removed' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @desc - Create a single product
// @route - POST /api/product
// @access - Private / Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'Sample name',
    price: 0,
    user: req.user._id,
    image: '/images/sample.jpg',
    brand: 'Sample Brand',
    category: 'Sample Category',
    countInStock: 0,
    numReviews: 0,
    description: 'sample description'
  })

  const createdProduct = await product.save()
  res.status(201).json(createdProduct)
})

// @desc - Update a single product
// @route - PUT /api/product/:id
// @access - Private / Admin
const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } = req.body

  const product = await Product.findById(req.params.id)

  if (product) {
    product.name = name
    product.price = price
    product.description = description
    product.image = image
    product.brand = brand
    product.category = category
    product.countInStock = countInStock

    const updatedProduct = await product.save()
    res.json(updatedProduct)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

export {
  getProducts,
  getRetroProducts,
  getComputerLaptopProducts,
  getSmartphoneProducts,
  getVrProducts,
  getProductById,
  getAllProducts,
  deleteProduct,
  createProduct,
  updateProduct
}