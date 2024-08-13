const mongoose = require('mongoose')

const paySchema = new mongoose.Schema({
      pay: {
        type: Number,
        required: true
      },
      user_id: {
        type : mongoose.Types.ObjectId,
        ref: "User",
        required: true
    }
},{
    timestamps:true
})

const mPay = mongoose.models.Pay || mongoose.model("Pay", paySchema)
module.exports = {mPay}
