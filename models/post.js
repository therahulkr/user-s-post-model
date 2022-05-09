const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    avatar : { 
        type: String
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'person'
    },
    //include the array of ids of all comments
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref : 'Comment'
    }],
    likes : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Like'
        }
    ]
},{
    timestamps:true,
})

const Post = mongoose.model('Post',postSchema);
module.exports = Post;