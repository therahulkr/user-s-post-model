const mongoose = require('mongoose')

const multer = require('multer')
const path = require('path')

const avatarPath = path.join('/uploads/user/avatars')

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true 
    },
    avatar : { 
        type: String
    }
},{
   timestamps:true
})


const user = mongoose.model('person',userSchema)

module.exports = user;
