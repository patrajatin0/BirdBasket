import mongoose from "mongoose";

const users = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true

    },
    password: {
        type: String,
        required: true

    },
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true,

    }



})
const birdsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    category: {
        type: String,
        required: true,
        enum: ["Chiken", "Turkey", "Quail", "Duck"]
    },
    price: {
        type: Number,
        required: true,
    },
    weight: {
        type: String,
        required: true

    },
    img_url: {
        type: String
    },
    description: {
        type: String,
    },
    stock: {
        type: Number
    }



})

export const Birds = mongoose.model("birds", birdsSchema)

const Users = mongoose.model("Users", users)
export default Users