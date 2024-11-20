const Product = require('../models/productModel')

const getProducts = async(req, res) => {
    try{
        const products = await Product.find({});
        res.status(200).json(products)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
}

const getProductById = async(req, res) => {
    try{
        const {id} = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
}

const createProduct = async(req, res) => {
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch(error){
        res.status(500).json({message: error.message})
    }
}


const editProduct = async(req, res) => {
    try {
        const {id} = req.params
        const product = await Product.findByIdAndUpdate(id, req.body)
        if(!product) {
            return res.status(404).json({message: `Cannot find this product with this ID ${id}`})
        }
        const updateProduct = await Product.findById(id)
        res.status(200).json(updateProduct)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const deleteProduct = async(req, res) => {
    try {
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id)
        if(!product) {
            return res.status(404).json({message: `Cannot find this product with this ID ${id}`})
        }
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


module.exports = {
    getProducts,
    getProductById,
    createProduct,
    editProduct,
    deleteProduct,
}