const mongoose = require('mongoose');
const {Schema} = mongoose;


const postSchema = mongoose.Schema({

    title: {
        type: String,
        required: true,
        max: 30
    },

    body: {
        type: String,
        required: true,
        max: 250
    },
    date: {
        type: Date,
        default: Date.now()
    },
    _created_by: {
        type: Schema.ObjectId, 
        ref : 'User'
    }

});
 
module.exports =  mongoose.model('Post' , postSchema);
