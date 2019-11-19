const mongoose = require('mongoose');
const {Schema} = mongoose;
const voteSchema = mongoose.Schema({
    post_id :{
        type:Schema.ObjectId,
        required:true,
        ref:'Post'
    },
    votes:{
        type:Number,
        required:true
    },
    usersVoted:{
        type:Array,
        required:true,
        ref:'User'
    }
})
module.exports = mongoose.model('Vote' , voteSchema);