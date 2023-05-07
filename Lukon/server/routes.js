import Router from 'express'
import ProductController from './models/Product/ProductController.js'


const router = new Router()

router.post('/categories', ProductController.createCategories)
router.post('/product', ProductController.createProducts)

router.get('/categories', ProductController.getAllCategories)
router.get('/product', ProductController.getAllProducts)

router.put('/categories', ProductController.UpdateCategories)
router.put('/product', ProductController.UpdateProducts)


export default router;