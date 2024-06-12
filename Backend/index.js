import express from "express"
import dotenv from "dotenv"
import mongoose  from "mongoose"
import cors from 'cors'
import menuRoute from "./route/menu.route.js"
import userRoute from "./route/user.route.js"
const app = express()
app.use(cors())
dotenv.config()
app.use(express.json())

const port = process.env.PORT
const MongoDBUri = process.env.MongoDBUri
// connect db
try {
    mongoose.connect(MongoDBUri)
    console.log("MongoDB connected")
} catch (error) {
    console.log(error.message)
}
//defining routes
app.use("/menu",menuRoute)
app.use("/user",userRoute)
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})