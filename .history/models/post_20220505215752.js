const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({

    title:{
        type: String,
        required: true
    },

    status: {
        type: String,
        default: 'public'
    },

    allowComments:{
        type: Boolean,
        require: true
    },

    body:{
        type: String,
        require: true
    },
    
    file:{
        type: String,
    }

    date: {
        type: Date,
        de
    }

});

module.exports = mongoose.model('posts', postSchema);