import mongoose from "mongoose"
import 'dotenv/config'

export const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB).then(() => console.log('DB Connected'))
}