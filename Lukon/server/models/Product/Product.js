import mongoose  from 'mongoose'

const Product = new mongoose.Schema({
        id_1c: {type:Number, required: true},
        categories_id_1c: {type:Number, required: true},
        name: {type:String, required: true},
        description: {type:String, required: true},
        priceUSD: {type:Number, required: true},
        priceUAH: {type:Number, required: true},
        image: {type:String, required: true},
        availability: {type:Number, required: true} 
})

const ProductBox = new mongoose.Schema({
    products: [Product]
})

export default mongoose.model('ProductBox', ProductBox)