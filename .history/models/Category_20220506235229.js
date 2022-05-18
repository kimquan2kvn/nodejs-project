const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CateSchema = new Schema({

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
    },

    date: {
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model('posts', postSchema);