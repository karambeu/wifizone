const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
      },
      fullname: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true
      },
      role:{
        type: String,
        require: true
      }
},{
    timestamps:true
})

const mUser = mongoose.models.User || mongoose.model("User", userSchema)
module.exports = {mUser}
