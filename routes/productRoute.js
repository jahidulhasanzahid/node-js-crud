const express = require('express')
const Product = require('../models/productModel')
const router = express.Router()
const {getProducts,getProductById,createProduct,editProduct,deleteProduct} = require('../controllers/productController')

// get products
router.get('/', getProducts)

// get product by ID
router.get('/:id', getProductById)

// create a product
router.post('', createProduct)

// edit product
router.put('/:id',editProduct )

// delete a product
router.delete('/:id', deleteProduct)

module.exports = router