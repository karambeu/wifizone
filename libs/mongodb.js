const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config({path:"/Applications/MAMP/htdocs/JAVASCRIPT/authapp/.env"});
//cyroassi:X8d04Yr95VUxafy9@cluster0.i9l9usr.mongodb.net/authapp
async function Connection(){
    try {
        await mongoose.connect(process.env.MONGODB_URI)
       // console.log('connection à la base de données réussie')
    } catch (error) {
        //console.log('connection échouée à la base de données;',error.message)
    }
}
module.exports = Connection