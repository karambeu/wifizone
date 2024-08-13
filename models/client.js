const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema({
    lastname: {
        type: String,
        required: true
      },
      firstname: {
        type: String,
        required: true
      },
      email: {
        type: String,
        unique: true
      },
      phone: {
        type: String,
        required: true,
        unique: true
      },
      whatsapp: {
        type: String,
        required: true,
        unique: true
      },
      district: {
        type: String,
        required: true
      },
      residence: {
        type: String,
        required: true
      },
      observation: {
        type: String,
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

const mClient = mongoose.models.Client || mongoose.model("Client", clientSchema)
module.exports = {mClient}
