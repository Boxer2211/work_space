import ProductBox from './Product.js'
import ProductService from './ProductService.js'

class PostController {
    async createProducts(req, res){
        try {
            const post = await ProductBox.create(req.body)
            res.json(post)
        } catch (error) {
            console.log(error);
        }
        
    }
    async createCategories(req, res){
        try {
            
        } catch (error) {
            console.log(error);
        }
    }
    async getAllProducts(req, res){
        try {
            const posts = await ProductService.getAllProducts()
            return res.json(posts)
        } catch (error) {
            console.log(error);
        }
    }
    async getAllCategories(req, res){
        try {
            
        } catch (error) {
            console.log(error);
        }
    }
    async UpdateProducts(req, res){
        try {
           
            const updatedPost = await ProductService.UpdateProducts(req.body)
            return res.json(updatedPost)
        } catch (error) {
            console.log(error);
        }
    }
    async UpdateCategories(req, res){
        try {
            
        } catch (error) {
            console.log(error);
        }
    }

}

export default new PostController