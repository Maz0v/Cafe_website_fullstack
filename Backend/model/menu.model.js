import mongoose from "mongoose";

const menuSchema = mongoose.Schema({
    name:{type:String},
    title: {type:String},
    price: {type:Number},
    category: {type:String},
    image: {type:String},
})

const Menu = mongoose.model("Menu",menuSchema)

export default Menu