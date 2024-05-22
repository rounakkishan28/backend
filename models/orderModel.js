import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    items: {
        type: Array,
        required: true
    },
    amount: {
        type: Object,
        required: true
    },
    status: {
        type: String,
        default: "Food Processing"
    },
    payment: {
        type: Boolean,
        default: false
    },
    address: {
        type: Object,
        required: true
    }
})

const orderModel = mongoose.models.order || mongoose.model("order", orderSchema)
export default orderModel