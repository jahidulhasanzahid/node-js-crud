const Product = require('../models/productModel')
const asyncHandler = require('express-async-handler')

const getProducts = asyncHandler(async(req, res) => {
    try{
        const products = await Product.find({});
        res.status(200).json(products)
    } catch(error) {
        res.status(500);
        throw new Error(error.message)
    }
})

const getProductById = asyncHandler(async(req, res) => {
    try{
        const {id} = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch(error) {
        res.status(500);
        throw new Error(error.message)
    }
})

const createProduct = asyncHandler(async(req, res) => {
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch(error){
        res.status(500);
        throw new Error(error.message)
    }
})


const editProduct = asyncHandler(async(req, res) => {
    try {
        const {id} = req.params
        const product = await Product.findByIdAndUpdate(id, req.body)
        if(!product) {
            res.status(404);
            throw new Error(`Cannot find this product with this ID ${id}`)
        }
        const updateProduct = await Product.findById(id)
        res.status(200).json(updateProduct)
    } catch (error) {
        res.status(500);
        throw new Error(error.message)
    }
})

const deleteProduct = asyncHandler(async(req, res) => {
    try {
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id)
        if(!product) {
            return res.status(404).json({message: `Cannot find this product with this ID ${id}`})
        }
        res.status(200).json(product)
    } catch (error) {
        res.status(500);
        throw new Error(error.message)
    }
})


module.exports = {
    getProducts,
    getProductById,
    createProduct,
    editProduct,
    deleteProduct,
}