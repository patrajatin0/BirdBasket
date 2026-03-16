import mongoose from "mongoose"


const connectDB = async () => {
    await mongoose.connect(process.env.CONECTION_STRING)
}

export default connectDB