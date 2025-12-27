const express = require('express');
const { allProducts } = require('../controllers/product');
const { allCategory } = require('../controllers/category');
const router = express.Router();


router.get('/allProduct',  allProducts);
router.get('/allCategory' , allCategory );

module.exports = router;
