import ProductBox from './Product.js'


class ProductService {
    async createProducts(post){
            const createdPost = await ProductBox.create(post)
            return createdPost;
    }
    async createCategories(post){
       
    }
    async getAllProducts(){
            const posts = await ProductBox.find()
            return posts
       
    }
    async getAllCategories(post){
        
      
    }
    async UpdateProducts(post){

            if (!post._id){
                throw new Error ('Id не вказано')
            }
            const updatedPost = await ProductBox.findByIdAndUpdate(post._id, post,{new:true})
            return updatedPost
       
    }
    async UpdateCategories(post){
       
    }
}

export default new ProductService()