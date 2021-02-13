import asyncHandler from 'express-async-handler'
import Product from '../models/Productmodel.js'

// @desc - Fetch latest products
// @route - GET /api/latest/products
// @access - Public
const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 0
  const page = Number(req.query.pageNumber) || 1

  const count = await Product.countDocuments({})

  const products = await Product.find({ category: 'latest' }).limit(pageSize).skip(pageSize * (page -1))

  res.json({products, page, pages: Math.ceil(count / pageSize)})
})

// @desc - Fetch computer & laptop products
// @route - GET /api/computers-laptops
// @access - Public
const getComputerLaptopProducts = asyncHandler(async (req, res) => {
  const pageSize = 0
  const page = Number(req.query.pageNumber) || 1

  const count = await Product.countDocuments({})

  const products = await Product.find({ category: 'computers/laptops'}).limit(pageSize).skip(pageSize * (page -1))

  res.json({products, page, pages: Math.ceil(count / pageSize)})
})

// @desc - Fetch retro products
// @route - GET /api/retro
// @access - Public
const getRetroProducts = asyncHandler(async (req, res) => {
  const pageSize = 0
  const page = Number(req.query.pageNumber) || 1

  const count = await Product.countDocuments({})

  const products = await Product.find({ category: 'retro'}).limit(pageSize).skip(pageSize * (page - 1))

  res.json({products, page, pages: Math.ceil(count / pageSize)})
})

// @desc - Fetch smartphone products
// @route - GET /api/smartphones
// @access - Public
const getSmartphoneProducts = asyncHandler(async (req, res) => {
  const pageSize = 0
  const page = Number(req.query.pageNumber) || 1

  const count = await Product.countDocuments({})

  const products = await Product.find({ category: 'smartphones'}).limit(pageSize).skip(pageSize * (page -1))

  res.json({products, page, pages: Math.ceil(count / pageSize)})
})

// @desc - Fetch VR products
// @route - GET /api/vr
// @access - Public
const getVrProducts = asyncHandler(async (req, res) => {
  const pageSize = 0
  const page = Number(req.query.pageNumber) || 1

  const count = await Product.countDocuments({})

  const products = await Product.find({ category: 'VR'}).limit(pageSize).skip(pageSize * (page -1))

  res.json({products, page, pages: Math.ceil(count / pageSize)})
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

// @desc - Create product review
// @route - POST /api/products/:id/reviews
// @access - Private
const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body

  const product = await Product.findById(req.params.id)

  if (product) {
    const alreadyReviewed = product.reviews.find(r => r.user.toString() === req.user._id.toString())

    if (alreadyReviewed) {
      res.status(400)
      throw new Error('Product already reviewed')
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id
    }

    product.reviews.push(review)
    product.numReviews = product.reviews.length
    product.rating = product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length

    await product.save()
    res.status(201).json({ message: 'Review Added' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @desc - Get Top rated Products
// @route - GET /api/products/top
// @access - public
const getTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(3)

  res.json(products)
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
  updateProduct,
  createProductReview,
  getTopProducts
}