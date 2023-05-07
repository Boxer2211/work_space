import express  from 'express'
const PORT = 5000
import mongoose  from 'mongoose'
import router from './routes.js'

const DB_URL = 'mongodb+srv://Lukon:UZ8DeH03VbeCrRX4@cluster0.g2ruyy7.mongodb.net/?retryWrites=true&w=majority'

const app = express()
app.use(express.json())
app.use('/api', router)
//app.use('/user', router)

const start = async() => {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log('server started on port', PORT))
    } catch (error) {
        console.log(error);
    }
}

start()