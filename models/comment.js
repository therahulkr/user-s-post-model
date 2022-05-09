const mongoose = require('mongoose')
const commentSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true 
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'person'
    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post'
    },
    likes : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Like'
        }
    ]
},{
    timestamps:true
})

const Comment = mongoose.model('Comment',commentSchema)//all comments will get stored in Comment db
module.exports = Comment;