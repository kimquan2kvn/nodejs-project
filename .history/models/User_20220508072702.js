const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({

    firstName:{
        type: String,
        required: true
    },

    lastName:{
        type: String,
        required: true
    },

    name:{
        type: String,
        required: true
    },

    name:{
        type: String,
        required: true
    },

    name:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('categories', CategorySchema);