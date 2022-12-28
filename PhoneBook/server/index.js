import express  from "express";
import mongoose from "mongoose";
import router from "./router.js";
import cors from "./middleware/corsMiddleware.js"

const PORT = 5000;
const DB_URL = `mongodb+srv://admin:admin@cluster0.c460u37.mongodb.net/?retryWrites=true&w=majority` //<password> заменяем на пароль пользователя от БД



const app = express()
app.use(cors)
app.use(express.json())
app.use('/api', router)


async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log('Server start ' + PORT))
    } catch (error) {
        console.log(error);
    }
}

startApp();